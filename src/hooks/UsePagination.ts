import { useMemo } from 'react';
import { UsePaginationProps } from '../types/UsePaginationProps';

const DOTS = '...';

export const usePagination = ({ totalCount, pageSize, currentPage }: UsePaginationProps) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  const paginationRange = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }, [totalPages]);

  let visiblePages = 2;

  const showingRange = useMemo(() => {
    const width = window.innerWidth;
    if (width >= 1200) {
      visiblePages = 5;
    } else if (width >= 640) {
      visiblePages = 4;
    }

    const totalPageNumbers = visiblePages + 2;

    if (totalPages <= totalPageNumbers) {
      return paginationRange;
    }

    const leftSiblingIndex = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    const rightSiblingIndex = Math.min(leftSiblingIndex + visiblePages - 1, totalPages);
    console.log(leftSiblingIndex);
    const shouldShowLeftDots = leftSiblingIndex > 1;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      return [...paginationRange.slice(0, visiblePages), DOTS, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      return [firstPageIndex, DOTS, ...paginationRange.slice(totalPages - visiblePages)];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      return [
        firstPageIndex,
        DOTS,
        ...paginationRange.slice(leftSiblingIndex - 1, rightSiblingIndex),
        DOTS,
        lastPageIndex,
      ];
    }
    return [];
  }, [currentPage, paginationRange, visiblePages, totalPages]);

  return {
    paginationRange,
    showingRange,
  };
};
