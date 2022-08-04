import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteName } from '../../router/AppRouter';
import styles from './Navbar.module.scss';
import cn from 'classnames';

export const Navbar: FC = (): JSX.Element => {
	const navigation = [
		{ name: 'Home', route: RouteName.HOME, current: true },
		{ name: 'Pokemons', route: RouteName.POKEMONS, current: false }
	];

	return (
		<nav className={styles.navbar}>
			<div className={cn(styles.container, 'container')}>
				<div className={styles.wrapper}>
					<Link className={styles.logo} to={RouteName.HOME}>Logo</Link>
					<ul className={styles.navList}>
						{navigation && navigation.map(item => (
							<li key={item.route}>
								<Link className={styles.navLink} to={item.route}><span>{item.name}</span></Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
