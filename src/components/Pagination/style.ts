import styled from 'styled-components';

export const Container = styled.div`
  .item.active {
    background-color: #d60077;
    border: none;
    color: #ececec;
  }
`;

export const Button = styled.button`
  background-color: #ececec;
  border-radius: 6px;
  border: solid 1px #121214;
  width: 2vw;
  height: 3vh;

  & + button {
    margin-left: 8px;
  }
`;
