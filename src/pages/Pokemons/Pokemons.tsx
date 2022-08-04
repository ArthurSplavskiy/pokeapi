import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPokemonData, getPokemons, searchPokemonAPI } from '../../api/api';
import { Pagination, PokemonList, Searchbar, Sort } from '../../components';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { withLayout } from '../../layout/Layout';
import styles from './Pokemos.module.scss';
import { IPokeResponse } from '../../api/api.interface';

const Pokemons: FC = (): JSX.Element => {
	const [ responseData, setResponseData ] = useState<IPokeResponse[]>([]);
	const [ page, setPage ] = useState<number>(0);
	const [ total, setTotal ] = useState<number>(0);
	const [ loading, setLoading ] = useState<boolean>(true);
	const [ notFound, setNotFound ] = useState<boolean>(false);
	const [ searching, setSearching ] = useState<boolean>(false);
	const { setPokemons } = useActions();
	const { pokemons } = useTypedSelector(state => state.data);
	const location = useLocation();
	const limit = 25;

	const fetchPokemons = async (): Promise<void> => {
		try {
			setLoading(true);
			const data = await getPokemons(limit, limit * page);

			if(data) {
				const promises = data.results.map(async (pokemon) => {
					return await getPokemonData(pokemon.url);
				});
				const results = await Promise.all(promises);
				const pokemonData = results as IPokeResponse[];
				setResponseData(pokemonData);
				setTotal(Math.ceil(data.count / limit));
			}

			setLoading(false);
			setNotFound(false);
		
		} catch (e) {
			if(e instanceof Error) {
				throw new Error(e.message);
			}
		}
	};

	const onSearch = async (pokemon: string | null): Promise<void> => {
		if (!pokemon) {
			return fetchPokemons();
		}
		setLoading(true);
		setNotFound(false);
		setSearching(true);
		const result = await searchPokemonAPI(pokemon);
		if (!result) {
			setNotFound(true);
			setLoading(false);
			return;
		} else {
			setPokemons([result]);
			setPage(0);
			setTotal(1);
		}
		setLoading(false);
		setSearching(false);
	};

	useEffect(() => {
		setPage(+location.search.slice(6));
	}, [location]);

	useEffect(() => {
		if (!searching) {
			fetchPokemons();
		}
	}, [page]);

	useEffect(() => {
		setPokemons(responseData);
	}, [responseData]);
	return (
		<div className={styles.root}>
			<div className={styles.actions}>
				{onSearch && <Searchbar onSearch={onSearch} />}
				{responseData && <Sort responseData={responseData} />}
			</div>
			<PokemonList
				pokemons={pokemons}
				page={page}
				loading={loading}
				notFound={notFound}
			/>
			<Pagination 
				page={page}
				total={total}
				setPage={setPage}
			/>
		</div>
	);
};

export default withLayout(Pokemons);