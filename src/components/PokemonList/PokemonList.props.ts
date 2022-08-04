import { IPokemons } from '../../interfaces/Pokemons.interface';

export interface PokemonListProps {
	pokemons: IPokemons[];
	loading: boolean;
	notFound: boolean;
	page: number;
}