import { FC } from 'react';
import styles from './Pagination.module.scss';
import { PaginationProps } from './Pagination.props';
import ArrowIcon from './arrow.svg';

export const Pagination: FC<PaginationProps> = ({ page, total, setPage }): JSX.Element => {

	const setNext = (): void => {
		const nextPage = Math.min(page + 1, total - 1);
		setPage(nextPage);
	};

	const setPrev = (): void => {
		const nextPage = Math.max(page - 1, 0);
		setPage(nextPage);
	};

	return (
		<div className={styles.pagination}>
			<button className={styles.prevPage} onClick={setPrev}>
				<img src={ArrowIcon} alt="prev page" />
			</button>
			<span  className={styles.currentPage}>{page + 1}</span>
			&nbsp;/&nbsp;
			<span  className={styles.totalPage}>{total}</span>
			<button className={styles.nextPage} onClick={setNext}>
				<img src={ArrowIcon} alt="next page" />
			</button>
		</div>
	);
};