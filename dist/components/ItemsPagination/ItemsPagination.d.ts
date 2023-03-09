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
    contentBetween?: JSX.Element;
}
declare function ItemsPagination({ itemsPerPage, elements, contentBetween }: PaginatedItemsProps): JSX.Element;
export default ItemsPagination;
