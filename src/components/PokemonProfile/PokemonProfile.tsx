import { FC } from 'react';
import styles from './PokemonProfile.module.scss';
import { PokemonProfileProps } from './PokemonProfile.props';
import cn from 'classnames';
import { PokemonType } from '../../interfaces/Pokemons.interface';

export const PokemonProfile: FC<PokemonProfileProps> = ({ 
	name, 
	type,
	image,
	height, 
	weight,
	stats,
	...props 
}): JSX.Element => {
	return (
		<div className={styles.profile} {...props}>
			<div className={cn(styles.image, {
				[styles.grassColor]: type === PokemonType.GRASS,
				[styles.fireColor]: type === PokemonType.FIRE,
				[styles.waterColor]: type === PokemonType.WATER,
				[styles.bugColor]: type === PokemonType.BUG,
				[styles.normalColor]: type === PokemonType.NORMAL,
				[styles.poisonColor]: type === PokemonType.POISON,
				[styles.groundColor]: type === PokemonType.GROUND,
				[styles.electricColor]: type === PokemonType.ELECTRIC,
				[styles.fairyColor]: type === PokemonType.FAIRY,
				[styles.fightingColor]: type === PokemonType.FIGHTING,
				[styles.psychicColor]: type === PokemonType.PSYCHIC,
				[styles.rockColor]: type === PokemonType.ROCK,
				[styles.ghostColor]: type === PokemonType.GHOST,
			})}>
				<img src={image} alt={name} />	
			</div>
			<div className={styles.name}><span>{name}</span></div>
			<div className={styles.info}>
				<div>Type: <span>{type}</span></div>
				<div>Height: <span>{height}</span></div>
				<div>Weight: <span>{weight}</span></div>
			</div>
			<ul className={styles.stats}>
				{stats && stats.map((stat, i) => (
					<li key={stat.stat.name + i}>
						<span className={styles.statName}>{stat.stat.name}</span>
						<span className={styles.statNumber}><span>{stat.base_stat}</span></span>
					</li>
				))}
			</ul>
		</div>
	);
};