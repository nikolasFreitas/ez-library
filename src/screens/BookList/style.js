import Styled from 'styled-components';

export const Container = Styled.div`
  padding: 30px 15px 15px;
  min-height: calc(100vh - 40px);
  width: 100%;
  background: white;

  @media screen and (max-width: 700px) {
    height: auto;
  }
`;

export const BoxContent = Styled.div`
  max-width: 960px;
  margin: 0px auto;
`;
