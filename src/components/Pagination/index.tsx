import React from 'react';

import { Container, Button } from './style';

interface PaginationProps {
  totalPages?: number;
  goToPage: any;
  currentPage: any;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  goToPage,
  currentPage,
}) => {
  const paginationItems = Array.from(Array(totalPages).keys());

  return (
    <Container>
      {paginationItems.map(item => (
        <Button
          key={item}
          type="button"
          onClick={() => goToPage(item + 1)}
          className={`item ${currentPage === item + 1 ? 'active' : 'inactive'}`}
        >
          {item + 1}
        </Button>
      ))}
    </Container>
  );
};

export default Pagination;
