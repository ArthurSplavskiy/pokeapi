import { FC, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { PokemonProfile } from '../../components';
import { withLayout } from '../../layout/Layout';
import { RouteName } from '../../router/AppRouter';
import styles from './Pokemon.module.scss';
import BackIcon from './back-arrow.svg';
import { IPokeResponse } from '../../api/api.interface';
import { searchPokemonAPI } from '../../api/api';
import cn from 'classnames';

const Pokemon: FC = (): JSX.Element => {
	const { name } = useParams();
	const [loading, setLoading] = useState<boolean>(true);
	const [pokemon, setPokemon] = useState<IPokeResponse>();
	const location = useLocation();

	const fetchPokemon = async (): Promise<void> => {
		try {
			const result = await searchPokemonAPI(name || '');
			setPokemon(result);
		} catch (e) {}
	};

	useEffect(() => {
		fetchPokemon();
		setLoading(false);
	}, []);

	return (
		<div className={styles.page}>
			<Link className={cn(styles.back, {
				[styles.disable]: loading
			})} to={`${RouteName.POKEMONS}${location.search}`}>
				<img src={BackIcon} alt="back" />
				<span>Back</span>
			</Link>
			{
				pokemon
					? 
					<PokemonProfile
						key={pokemon.name + pokemon.id}
						image={pokemon.sprites.other.dream_world.front_default}
						name={pokemon.name}
						type={pokemon.types[0].type.name}
						height={pokemon.height}
						weight={pokemon.weight}
						stats={pokemon.stats}
					/>
					:
					<p>d</p>
			}
		</div>
	);
};

export default withLayout(Pokemon);