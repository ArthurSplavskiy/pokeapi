import { IPokemon, ISprites, IType } from '../interfaces/Pokemons.interface';

export interface IResponse {
	count: number;
	next: string;
	previous: string;
	results: IPokemon[];
}

export interface IPokeResponse {
	abilities: [];
	base_experience: number;
	forms: [];
	game_indices: [];
	height: number;
	held_items: [];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: [];
	name: string;
	order: number;
	past_types: [];
	species: IPokemon;
	sprites: ISprites;
	stats: [];
	types: IType[];
	weight: number;
}