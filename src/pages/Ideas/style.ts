import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 85vh;
  margin-top: 32px;

  a {
    color: #ff008e;
    font-size: 20px;
    font-weight: 500;

    display: flex;
    justify-content: center;
    position: fixed;
    top: 10px;
    left: 150px;
  }
`;
