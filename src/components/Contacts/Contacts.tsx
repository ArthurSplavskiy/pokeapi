import { FC } from 'react';
import styles from './Contacts.module.scss';

export const Contacts: FC = (): JSX.Element => {
	return (
		<div className={styles.contacts}>
			<div className={styles.wrapper}>
				<h1>Contacts</h1>
				<ul>
					<li><a href="https://arthursplavskiy.netlify.app/" target="_blank" rel="noreferrer">https://arthursplavskiy.netlify.app/</a></li>
					<li><a href="mailto:arthur.splavskiy@gmail.com">arthur.splavskiy@gmail.com</a></li>
					<li><a href="https://t.me/arthursplavskiy">https://t.me/arthursplavskiy</a></li>
					<li><a href="mailto:arthur.splavskiy@gmail.com">+380 96 4751 567</a></li>
				</ul>
			</div>
		</div>
	);
};