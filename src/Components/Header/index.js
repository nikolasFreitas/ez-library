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
              <Styled.NavLink to="procurar-livros" selected={location.pathname === '/procurar-livros'}>
                procurar livros
              </Styled.NavLink>
              <Styled.NavLink to="meus-livros" selected={location.pathname === '/meus-livros'}>
                meus livros
              </Styled.NavLink>
            </Styled.NavBarBox>
          </Styled.Box>
        </Styled.NavBarContainer>
      )}
    </Styled.Container>
  );
};

export default withRouter(Header);
