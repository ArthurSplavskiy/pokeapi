import { ChangeEvent, useEffect, useState } from 'react';
import { IPokeResponse } from '../../api/api.interface';
import { convertToArray } from '../../helpers/convertToArray';
import { useActions } from '../../hooks/useActions';
import { PokemonType } from '../../interfaces/Pokemons.interface';
import styles from './Sort.module.scss';

export const Sort = ({ responseData }: {responseData: IPokeResponse[]}): JSX.Element => {
	const [ filterValue, setFilterValue ] = useState<string>('');
	const { sortPokemon, setPokemons } = useActions();
	const pokemonsType = convertToArray(PokemonType);
	const initialOption = 'all';

	const onChange = (e: ChangeEvent<HTMLSelectElement>): void => {
		setFilterValue(e.target.value);
	};

	useEffect(() => {
		if (filterValue === initialOption) {
			setPokemons(responseData);
		} else {
			sortPokemon(responseData, filterValue);
		}
	}, [responseData, filterValue]);

	return <select
				className={styles.select}
				onChange={onChange}
			>
				<option value={initialOption}>All</option>
				{pokemonsType && pokemonsType.map(opt => (
					<option key={opt} value={opt}>{opt}</option>
				))}
				{[]}
		</select>;
};