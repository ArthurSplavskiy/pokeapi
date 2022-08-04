import { IPokemons } from '../../../interfaces/Pokemons.interface';
import { DataActionsEnum, SearchPokemonAction, SetPokemonsAction, SortPokemonAction } from './types';

export const DataActionCreators = {
	setPokemons: (pokemons: IPokemons[]): SetPokemonsAction => ({type: DataActionsEnum.SET_POKEMONS, payload: pokemons}),
	searchPokemon: (pokemons: IPokemons[], query: string): SearchPokemonAction => ({
		type: DataActionsEnum.SEARCH_POKEMON, 
		payload: pokemons.filter(el => el.name === query)
	}),
	sortPokemon: (pokemons: IPokemons[], filter: string): SortPokemonAction => ({
		type: DataActionsEnum.SORT_POKEMON, 
		payload: pokemons.filter(el => el.types[0].type.name === filter)
	})
};