import "./pagination.scss";
export interface PaginationElement {
    id: number;
    element: any;
}
export interface ItemsProps {
    currentItems: Array<PaginationElement>;
}
export interface PaginatedItemsProps {
    itemsPerPage: number;
    elements: Array<PaginationElement>;
}
declare function Pagination({ itemsPerPage, elements }: PaginatedItemsProps): JSX.Element;
export default Pagination;
