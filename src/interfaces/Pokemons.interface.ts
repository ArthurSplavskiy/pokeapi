export interface IPokemon {
	name: string;
	url: string;
}

export interface IDreamWorld {
	front_default: string;
	front_female: any;
}

export interface IOther {
	dream_world: IDreamWorld;
	home: any;
	officialArtwork: any;
}

export interface ISprites {
	back_default: string;
	back_female: any;
	back_shiny: string;
	back_shiny_female: any;
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
	other: IOther;
	versions: any;
}

export interface IType {
	slot: number;
	type: IPokemon;
}

export interface IPokemons {
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

export enum PokemonType {
	GRASS = 'grass',
	FIRE = 'fire',
	WATER = 'water',
	BUG = 'bug',
	NORMAL = 'normal',
	POISON = 'poison',
	GROUND = 'ground',
	ELECTRIC = 'electric',
	FAIRY = 'fairy',
	FIGHTING = 'fighting',
	PSYCHIC = 'psychic',
	ROCK = 'rock',
	GHOST = 'ghost'
}