import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';
import books from '../../img/books.png';
import clipboard from '../../img/Clipboard.png';

const Screen = () => (
  <Styled.Container>
    <Styled.BoxContent>
      <Styled.Navigation>
          <Styled.ImageBackground url={books} />
          <Styled.Title>Procurar um livro</Styled.Title>
          <Styled.NavContent>
            Aqui você encontra nosso acervo inteiro, e pode inclusive alugar um
          </Styled.NavContent>
      </Styled.Navigation>
      <Styled.Navigation>
          <Styled.ImageBackground url={clipboard} />
          <Styled.Title>Meus livros</Styled.Title>
          <Styled.NavContent>
            Verifique o status do sues livros, se é renovável, se há algum atraso ou a data de entrega
          </Styled.NavContent>
      </Styled.Navigation>
      <Styled.Navigation>
          <Styled.ImageBackground />
          <Styled.Title>Procurar um livro</Styled.Title>
          <Styled.NavContent>
            Aqui você encontra nosso acervo inteiro, e pode inclusive alugar um{' '}
          </Styled.NavContent>
      </Styled.Navigation>
    </Styled.BoxContent>
  </Styled.Container>
);

export default Screen;
