export interface ISearchbarProps {
	onSearch: (s: string | null) => Promise<void>
}