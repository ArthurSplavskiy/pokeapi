interface IStat {
	name: string;
}

interface IStats {
	base_stat: number;
	stat: IStat;
}

export interface PokemonProfileProps {
	name: string;
	type: string;
	image: string;
	height: number;
	weight: number;
	stats: IStats[];
}