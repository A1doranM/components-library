import cn from "classnames";
import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";

import ArrowRightIcon from "../../assets/images/icons/arrow.svg";
import ArrowLeftIcon from "../../assets/images/icons/arrow-reversed.svg";

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

function Items({ currentItems }: ItemsProps): JSX.Element {
  return (
    <>
      {currentItems &&
        currentItems.map((item: PaginationElement) => (
          <div key={item.id} className="item-container">
            {item.element}
          </div>
        ))}
    </>
  );
}

function ItemsPagination({
  itemsPerPage,
  elements,
  contentBetween
}: PaginatedItemsProps): JSX.Element {
  const [currentItems, setCurrentItems] =
    useState<Array<PaginationElement>>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(elements.slice(itemOffset, endOffset) as any);
    setPageCount(Math.ceil(elements.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % elements.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      {contentBetween}
      <ReactPaginate
        nextLabel={<img src={ArrowRightIcon} alt="next page" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<img src={ArrowLeftIcon} alt="prev page" />}
        pageClassName={"pagination__page-item"}
        pageLinkClassName={"pagination__page-link"}
        previousClassName={cn(
          "pagination__page-item",
          "pagination__prev-button"
        )}
        previousLinkClassName={cn(
          "pagination__page-link",
          "pagination__prev-link"
        )}
        nextClassName={cn("pagination__page-item", "pagination__next-button")}
        nextLinkClassName={cn("pagination__page-link", "pagination__next-link")}
        breakLabel="..."
        breakClassName={"pagination__page-item"}
        breakLinkClassName={"pagination__page-link"}
        containerClassName={"pagination"}
        activeClassName={"pagination__active"}
        renderOnZeroPageCount={null as any}
      />
    </>
  );
}

export default ItemsPagination;
