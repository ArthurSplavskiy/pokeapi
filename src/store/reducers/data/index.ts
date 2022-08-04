import { DataAction, DataActionsEnum, DataState } from './types';

const initialState: DataState = {
	pokemons: []
};

export default function dataReducer (state = initialState, action: DataAction): DataState {
	switch (action.type) {
		case DataActionsEnum.SET_POKEMONS:
			return { ...state, pokemons: action.payload};
		case DataActionsEnum.SEARCH_POKEMON:
			return { ...state, pokemons: action.payload};
		case DataActionsEnum.SORT_POKEMON:
			return { ...state, pokemons: action.payload};
		default:
			return state;
	}
}