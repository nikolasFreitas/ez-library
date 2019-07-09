import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';
import { parseDate } from './helpers';
import Table from '../../Components/Table';
import Loader from '../../Components/Loader';
import firebase from '../../services/requests';

const data_enum = ['label', 'dayOfLoan', 'devolutionDate'];
const header = ['Nome do livro', 'Data de ínicio de empréstimo', 'Data de devolução'];

const UserBooks = memo(() => {
  const [options, setOptions] = useState(false);

  useEffect(() => {
    const books = firebase.getBooks();
    const userBooks = firebase.getUserBooks();

    Promise.all([books, userBooks])
      .then(([books, sb]) => {
        const booksToShow = books
          .val()
          .filter(book => sb.val().books.some(id => id === Number(book.id)));
        setOptions(booksToShow);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <Styled.Container>
      <Styled.BoxContent>
        {options ? (
          <>
            <Styled.Title>Seus empréstimos</Styled.Title>
            <Styled.TableWrapper>
              <Table header={header} data={parseDate(options)} data_enum={data_enum} />
            </Styled.TableWrapper>
          </>
        ) : (
          <Styled.LoaderWrapper>
            <Loader size="200px" />
          </Styled.LoaderWrapper>
        )}
      </Styled.BoxContent>
    </Styled.Container>
  );
});

export default UserBooks;
