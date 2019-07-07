import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';
import books from '../../img/books.png';
import clipboard from '../../img/Clipboard.png';
import underConstruction from '../../img/under-construction.png';

const Screen = () => (
  <Styled.Container>
    <Styled.BoxContent>
      <Styled.Navigation to="procurar-livros">
        <Styled.ImageBackground url={books} />
        <Styled.Title>Procurar um livro</Styled.Title>
        <Styled.NavContent>
          Aqui você encontra nosso acervo inteiro, e pode inclusive pega um emprestado
        </Styled.NavContent>
      </Styled.Navigation>
      <Styled.Navigation to="meus-livros">
        <Styled.ImageBackground url={clipboard} />
        <Styled.Title>Meus livros</Styled.Title>
        <Styled.NavContent>
          Verifique o status do sues livros, se é renovável, se há algum atraso ou a data de entrega
        </Styled.NavContent>
      </Styled.Navigation>
      <Styled.Navigation>
        <Styled.ImageBackground url={underConstruction} />
        <Styled.Title>Em construção</Styled.Title>
        <Styled.NavContent>Aqui terá uma página nova a seu serviço :D</Styled.NavContent>
      </Styled.Navigation>
    </Styled.BoxContent>
  </Styled.Container>
);

export default Screen;
