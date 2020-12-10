import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 16px;
  width: 90vw;
  height: 85vh;
`;

export const Content = styled.div`
  max-width: 730px;
  padding: 8px 48px;
  display: flex;
  flex-direction: column;
  margin-top: 25vh;

  a {
    margin: 32px 0;
  }

  p {
    font-size: 18px;
    line-height: 32px;
  }
`;

export const Ideas = styled.div`
  flex: 1;
  margin-left: 16px;
  padding: 8px 48px;

  > a {
    margin-top: 2vh;
  }
`;
