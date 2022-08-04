import { ChangeEvent, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import styles from './Searchbar.module.scss';
import { ISearchbarProps } from './Searchbar.props';

export const Searchbar = ({ onSearch }: ISearchbarProps): JSX.Element => {
	const [ searchValue, setSearchValue ] = useState<string>('');
	const debouncedCallback = useDebounce(onSearch, 100);

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const query = e.target.value.toLowerCase();
		setSearchValue(query);
		debouncedCallback(query);
	};

	return <input
		className={styles.input}
		type="text"
		value={searchValue}
		onChange={onChange} 
		placeholder='Search...'
	/>;
};