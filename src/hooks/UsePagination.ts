import { useMemo } from 'react';
import { UsePaginationProps } from '../types/UsePaginationProps';

export const usePagination = ({ totalCount, pageSize, currentPage }: UsePaginationProps) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  const paginationRange = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }, [totalPages, currentPage]);

  return paginationRange;
};
