import type { ReactNode } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) => {
  if (totalPages < 1) return null;
  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const renderPageNumbers = () => {
    const pages: ReactNode[] = [];
    const maxVisiblePages = 5;
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(
        <button
          key="first"
          onClick={() => onPageChange(1)}
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors text-gray-600 text-sm cursor-pointer"
          aria-label="Go to first page"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span
            key="start-ellipsis"
            className="w-8 h-8 flex items-center justify-center text-gray-400 text-sm"
          >
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`w-8 h-8 flex items-center justify-center rounded transition-colors text-sm ${
            currentPage === i
              ? "bg-blue-500 text-white hover:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer"
              : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
          aria-label={`Go to page ${i}`}
          aria-current={currentPage === i ? "page" : undefined}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span
            key="end-ellipsis"
            className="w-8 h-8 flex items-center justify-center text-gray-400 text-sm dark:text-gray-500"
          >
            ...
          </span>
        );
      }
      pages.push(
        <button
          key="last"
          onClick={() => onPageChange(totalPages)}
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors text-gray-600 text-sm dark:text-gray-300 cursor-pointer"
          aria-label="Go to last page"
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <nav
      className={`inline-flex items-center justify-center space-x-1 ${className}`}
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-8 h-8 flex items-center justify-center rounded transition-colors text-sm ${
          currentPage === 1
            ? "text-gray-300 dark:text-gray-500 cursor-not-allowed"
            : "text-gray-600 hover:bg-gray-100 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700"
        }`}
        aria-label="Go to previous page"
      >
        ←
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-8 h-8 flex items-center justify-center rounded transition-colors text-sm ${
          currentPage === totalPages
            ? "text-gray-300 dark:text-gray-500 cursor-not-allowed"
            : "text-gray-600 hover:bg-gray-100 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700"
        }`}
        aria-label="Go to next page"
      >
        →
      </button>
    </nav>
  );
};
