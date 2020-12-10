import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d60077;
  border-radius: 6px;
  width: 40vw;
  padding: 16px 32px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateX(5px);
  }

  & + div {
    margin-top: 8px;
  }

  p + p {
    margin-top: 10px;
  }

  button {
    border: none;
    background-color: transparent;
    width: 16px;
    height: 16px;
    transform: translateX(35vw);
    color: #ffffff;
    transition: 0.2s;

    &:hover {
      color: ${shade(0.3, '#121214')};
    }

    & + button {
      margin-left: 8px;
    }
  }
`;
