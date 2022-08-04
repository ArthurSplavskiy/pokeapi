import { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { DicrementCountAction, IncrementCountAction } from '../../store/reducers/count/types';
import styles from './Counter.module.scss';

export const Counter: FC = (): JSX.Element => {
	const { count } = useTypedSelector(state => state.count);
	const { incrementCount, dicrementCount } = useActions();

	const incrementHandler = (): IncrementCountAction => incrementCount(count);
	const dicrementHandler = (): DicrementCountAction => dicrementCount(count);

	return (
		<div className='component'>
			<div className={styles.counter}>
				<button onClick={dicrementHandler}>-1</button>
				<span>&nbsp;{count}&nbsp;</span>
				<button onClick={incrementHandler}>+1</button>
			</div>
		</div>
	);
};