import axios from 'axios';
import { IPokeResponse, IResponse } from './api.interface';

export const getPokemons = async (limit = 25, offset = 0): Promise<IResponse | undefined> => {
	try {
		const res = await axios.get<IResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
		return res.data;
		
	} catch (e) {
		if(e instanceof Error) {
			throw new Error(e.message);
		}
	}
};

export const searchPokemonAPI = async (name: string): Promise<IPokeResponse | undefined> => {
	try {
		const res = await axios.get<IPokeResponse>(`https://pokeapi.co/api/v2/pokemon/${name}`);
		return res.data;
	} catch (e) {}
};

export const getPokemonData = async (url: string): Promise<IPokeResponse | undefined> => {
	try {
		const res = await axios.get<IPokeResponse>(url);
		return res.data;
	} catch (e) {
		if(e instanceof Error) {
			throw new Error(e.message);
		}
	}
};