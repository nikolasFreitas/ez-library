import Styled from 'styled-components';

export const Container = Styled.div`
  padding: 30px 15px 15px;
  min-height: calc(100vh - 100px);
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

export const TableWrapper = Styled.div`
  margin-top: 30px;
  max-height: 450px;
  overflow-y: auto;
`;

export const RentedText = Styled.p`
  color: #e74c3c;
`;

export const AvailableText = Styled.p`
  color: #2ecc71;
`;

export const Title = Styled.h1`

`;
