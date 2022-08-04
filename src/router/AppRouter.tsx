import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Pokemons from '../pages/Pokemons/Pokemons';
import Pokemon from '../pages/Pokemon/Pokemon';

export enum RouteName {
	POKEMONS = '/pokemons',
	POKEMON = '/pokemons/:name/:id',
	HOME = '/'
}

const AppRouter = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={RouteName.HOME} element={<Home />} />
				<Route path={RouteName.POKEMONS} element={<Pokemons />} />
				<Route path={RouteName.POKEMON} element={<Pokemon />} />
				<Route path='*' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;