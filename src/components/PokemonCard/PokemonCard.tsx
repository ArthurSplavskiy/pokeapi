import { FC } from 'react';
import styles from './PokemonCard.module.scss';
import { PokemonCardProps } from './PokemonCard.props';
import cn from 'classnames';
import { PokemonType } from '../../interfaces/Pokemons.interface';

export const PokemonCard: FC<PokemonCardProps> = ({ id, name, type, image, ...props }): JSX.Element => {

	return (
		<div className={cn(styles.card, {
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
			})} {...props}>
			<div className={styles.id}><span># {id}</span></div>
			<img className={styles.image} src={image} alt={name} />
			<div className={styles.name}>{name}</div>
			<div className={styles.type}>Type: {type}</div>
		</div>
	);
};