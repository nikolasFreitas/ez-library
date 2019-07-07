import React from 'react';
import { withRouter } from 'react-router-dom';
import * as Styled from './style';

const Header = ({ location }) => {
  return (
    <Styled.Container>
      <Styled.UpperHeadBox>
        <Styled.Box>
          <Styled.Title to="/">Ez Library</Styled.Title>
        </Styled.Box>
      </Styled.UpperHeadBox>
      {location.pathname !== '/' && (
        <Styled.NavBarContainer>
          <Styled.Box>
            <Styled.NavBarBox>
              <Styled.NavLink to="teste" selected={location.pathname === '/teste'}>
                Teste
              </Styled.NavLink>
              <Styled.NavLink to="get" selected={location.pathname === '/get'}>
                get
              </Styled.NavLink>
            </Styled.NavBarBox>
          </Styled.Box>
        </Styled.NavBarContainer>
      )}
    </Styled.Container>
  );
};

export default withRouter(Header);
