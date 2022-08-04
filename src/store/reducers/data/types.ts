import { IPokemons } from '../../../interfaces/Pokemons.interface';

export interface DataState {
	pokemons: IPokemons[];
}

export enum DataActionsEnum {
	SET_POKEMONS = 'SET_POKEMONS',
	SEARCH_POKEMON = 'SEARCH_POKEMON',
	SORT_POKEMON = 'SORT_POKEMON',
	GET_POKEMON = 'GET_POKEMON'
}

export interface SetPokemonsAction {
	type: DataActionsEnum.SET_POKEMONS;
	payload: IPokemons[];
}

export interface SearchPokemonAction {
	type: DataActionsEnum.SEARCH_POKEMON;
	payload: IPokemons[];
}

export interface SortPokemonAction {
	type: DataActionsEnum.SORT_POKEMON;
	payload: IPokemons[];
}

export type DataAction = SetPokemonsAction | SearchPokemonAction | SortPokemonAction;