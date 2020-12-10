import React, { useCallback, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';
import { Container } from './style';

import Idea from '../../components/Idea';
import Pagination from '../../components/Pagination';

interface Idea {
  id: string;
  title: string;
  description: string;
  category: string;
}

const Ideas: React.FC = () => {
  const history = useHistory();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>();
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    api.get(`idea?page=${currentPage}`).then(response => {
      const [dataPerPage, count] = response.data;

      const pages = count / 4;
      const roundedNumber = Math.ceil(pages);

      setIdeas(dataPerPage);
      setTotalPages(roundedNumber);
    });
  }, [totalPages, currentPage]);

  const updateIdea = useCallback(
    (id: string) => {
      history.push(`/edit/${id}`);
    },
    [history],
  );

  const deleteIdea = useCallback((id: string) => {
    api.delete(`idea/${id}`);
    window.location.reload();
  }, []);

  return (
    <Container>
      <a href="/">
        <FiChevronLeft size={25} color="#ff008e" />
        Voltar
      </a>

      {ideas.map(idea => (
        <Idea
          key={idea.id}
          id={idea.id}
          title={idea.title}
          category={idea.category}
          description={idea.description}
          updateIdea={(id: string) => updateIdea(id)}
          deleteIdea={(id: string) => deleteIdea(id)}
        />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={(page: number) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default Ideas;
