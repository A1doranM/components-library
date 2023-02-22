import { ReactPaginateProps } from "react-paginate";
import "./pagination.scss";
export interface PaginatedItemsProps extends ReactPaginateProps {
}
declare function Pagination({ ...props }: PaginatedItemsProps): JSX.Element;
export default Pagination;
