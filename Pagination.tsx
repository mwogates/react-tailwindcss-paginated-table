/* eslint-disable no-nested-ternary */
import React from "react";
import { range } from "lodash";

interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: Function;
  onPageSizeChange: Function;
}

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onPageSizeChange,
}: PaginationProps) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="inline-flex items-center mb-4 list-reset">
        <li>
          <select
            name="pageSize"
            title="pageSize"
            value={pageSize}
            className="block h-8 px-2 mr-2 leading-tight text-gray-700 bg-gray-100 border rounded"
            onChange={({ currentTarget }) => {
              currentTarget.blur();
              onPageSizeChange(currentTarget.value);
            }}
          >
            <option>3</option>
            <option>5</option>
            <option>7</option>
            <option>10</option>
          </select>
        </li>
        {pages.map((page, i) => (
          <li className="border rounded" key={page}>
            <button
              type="button"
              className={`  text-gray-700 font-bold h-8 w-10
               ${buttonColor(page, currentPage)},
                ${isEdge(i, pages.length)}`}
              onClick={(event) => {
                event.currentTarget.blur();
                onPageChange(page);
              }}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

function isEdge(i: number, pagesLength: number) {
  if (i === pagesLength - 1) return "rounded";
  return i === 0 ? "rounded-l" : i === pagesLength - 1 ? "rounded-r" : "";
}

function buttonColor(page: number, currentPage: number) {
  return page === currentPage ? "bg-gray-200 shadow-inner" : "bg-gray-100";
}

export default Pagination;
