import React, { useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

import { Container } from './style';

interface IdeasList {
  id: string;
  title: string;
  category: string;
  description: string;
  updateIdea: any;
  deleteIdea: any;
}

const Idea: React.FC<IdeasList> = ({
  id,
  title,
  category,
  description,
  updateIdea,
  deleteIdea,
}) => {
  return (
    <Container>
      <p>{title}</p>
      <p>{category}</p>
      <p>{description}</p>
      <div>
        <button type="button" onClick={() => updateIdea(id)}>
          <FiEdit />
        </button>
        <button type="button" onClick={() => deleteIdea(id)}>
          <FiTrash />
        </button>
      </div>
    </Container>
  );
};

export default Idea;
