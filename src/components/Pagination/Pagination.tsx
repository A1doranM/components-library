import cn from "classnames";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import React from "react";

import ArrowRightIcon from "../../assets/images/icons/arrow.svg";
import ArrowLeftIcon from "../../assets/images/icons/arrow-reversed.svg";

import "./pagination.scss";

export interface PaginatedItemsProps extends ReactPaginateProps {}

function Pagination({ ...props }: PaginatedItemsProps): JSX.Element {
  return (
    <ReactPaginate
      {...props}
      nextLabel={<img src={ArrowRightIcon} alt="next page" />}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      previousLabel={<img src={ArrowLeftIcon} alt="prev page" />}
      pageClassName="pagination__page-item"
      pageLinkClassName="pagination__page-link"
      previousClassName={cn("pagination__page-item", "pagination__prev-button")}
      previousLinkClassName={cn(
        "pagination__page-link",
        "pagination__prev-link"
      )}
      nextClassName={cn("pagination__page-item", "pagination__next-button")}
      nextLinkClassName={cn("pagination__page-link", "pagination__next-link")}
      breakLabel="..."
      breakClassName="pagination__page-item"
      breakLinkClassName="pagination__page-link"
      containerClassName="pagination"
      activeClassName="pagination__active"
      renderOnZeroPageCount={null as any}
    />
  );
}

export default Pagination;
