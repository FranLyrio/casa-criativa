import styled from 'styled-components';
import { shade } from 'polished';

export const AnchorStyle = styled.a`
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  padding: 8px;
  background-color: #ff008e;
  width: 200px;
  color: #ffffff;

  &:hover {
    background-color: ${shade(0.2, '#ff008e')};
  }
`;
