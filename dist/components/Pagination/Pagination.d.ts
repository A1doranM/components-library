import "./pagination.scss";
export interface ItemsProps {
    currentItems: any;
}
export interface PaginatedItemsProps {
    itemsPerPage: number;
    elements: any;
}
declare function Pagination({ itemsPerPage, elements }: PaginatedItemsProps): JSX.Element;
export default Pagination;
