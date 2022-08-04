export interface PaginationProps {
	page: number;
	total: number;
	setPage: (n: number) => void;
}