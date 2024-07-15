import { useMemo } from 'react';
import { UsePaginationProps } from '../types/UsePaginationProps';

const DOTS = '...';

export const usePagination = ({ totalPages, currentPage }: UsePaginationProps) => {
  const paginationRange = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }, [totalPages]);

  const showingRange = useMemo(() => {
    const totalPageNumbers = window.innerWidth >= 1200 ? 5 : window.innerWidth >= 640 ? 4 : 2;

    if (totalPages <= totalPageNumbers + 2) {
      return paginationRange;
    }

    const leftSiblingIndex = Math.max(currentPage - Math.floor(totalPageNumbers / 2), 1);
    const rightSiblingIndex = Math.min(leftSiblingIndex + totalPageNumbers - 1, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 1;
    const shouldShowRightDots = rightSiblingIndex < totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      return [...paginationRange.slice(0, totalPageNumbers), DOTS, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      return [1, DOTS, ...paginationRange.slice(totalPages - totalPageNumbers)];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      return [
        1,
        DOTS,
        ...paginationRange.slice(leftSiblingIndex - 1, rightSiblingIndex),
        DOTS,
        totalPages,
      ];
    }

    return [];
  }, [currentPage, paginationRange, totalPages]);

  return {
    paginationRange,
    showingRange,
  };
};
