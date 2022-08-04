import { Link } from 'react-router-dom';
import { RouteName } from '../../router/AppRouter';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import styles from './PokemonList.module.scss';
import { PokemonListProps } from './PokemonList.props';

export const PokemonList = ({ 
	pokemons, page, loading, notFound 
}: PokemonListProps): JSX.Element => {

	return (
		<div className={styles.grid}>
			{
				pokemons.length
				?
					!loading
					?
						!notFound 
						?
							pokemons.map(p => (
								<Link to={`${RouteName.POKEMONS}/${p.id}/${p.name}?page=${page}`} key={p.name + p.id}>
									<PokemonCard
										id={p.id}
										image={p.sprites.other.dream_world.front_default}
										name={p.name}
										type={p.types[0].type.name}
									/>
								</Link>
							))
						:
						<p className={styles.notFound}>Not found 😭</p>
					:
					<p className={styles.notFound}>Search...</p>
				:
				<p className={styles.notFound}>Not found 😭</p>
			}
		</div>
	);
};