import cn from "classnames";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import React, { useState } from "react";

import ArrowRightIcon from "../../assets/images/icons/arrow.svg";
import ArrowLeftIcon from "../../assets/images/icons/arrow-reversed.svg";

import "./pagination.scss";

export interface PaginatedItemsProps extends ReactPaginateProps {}

function Pagination({ pageCount, ...props }: PaginatedItemsProps): JSX.Element {
  const [isLastPage, setIsLastPage] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(false);

  const handlePageChange = (selectedItem: { selected: number }) => {
    props.onPageChange && props.onPageChange(selectedItem);

    setIsLastPage(false);
    setIsFirstPage(false);

    if (selectedItem.selected === pageCount - 1) setIsLastPage(true);
    if (selectedItem.selected === 0) setIsFirstPage(true);
  };

  return (
    pageCount > 1 && (
      <ReactPaginate
        {...props}
        pageCount={pageCount}
        nextLabel={<img src={ArrowRightIcon} alt="next page" />}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        previousLabel={<img src={ArrowLeftIcon} alt="prev page" />}
        pageClassName="pagination__page-item"
        pageLinkClassName="pagination__page-link"
        previousClassName={cn(
          "pagination__page-item",
          "pagination__prev-button"
        )}
        previousLinkClassName={cn(
          "pagination__page-link",
          "pagination__prev-link",
          {
            ["pagination__page-link_disabled"]: isFirstPage
          }
        )}
        nextClassName={cn("pagination__page-item", "pagination__next-button")}
        nextLinkClassName={cn(
          "pagination__page-link",
          "pagination__next-link",
          {
            ["pagination__page-link_disabled"]: isLastPage
          }
        )}
        breakLabel="..."
        breakClassName="pagination__page-item"
        breakLinkClassName="pagination__page-link"
        containerClassName="pagination"
        activeClassName="pagination__active"
        renderOnZeroPageCount={null}
      />
    )
  );
}

export default Pagination;
