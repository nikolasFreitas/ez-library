import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import * as Styled from './style';
import { book_options, transformToComponent } from './helpers';
import Table from '../../Components/Table';
import Loader from '../../Components/Loader';
import firebase from '../../services/requests';

const data_enum = ['label', 'dayOfLoan', 'devolutionDate', 'returned'];
const header = ['Nome do livro', 'Data de ínicio de empréstimo', 'Data de devolução', 'Disponível'];

const BookList = memo(() => {
  const [select, setSelect] = useState(false);
  const [options, setOptions] = useState();

  useEffect(() => {
    firebase
      .getBooks()
      .then(data => {
        const result = data.val();
        setOptions(
          transformToComponent(
            result,
            <Styled.RentedText>Alugado</Styled.RentedText>,
            <Styled.AvailableText>Disponível</Styled.AvailableText>,
            'returned'
          )
        );
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <Styled.Container>
      <Styled.BoxContent>
        {options ? (
          <>
            <Select options={book_options} onChange={setSelect} value={select} />
            <Styled.Title>Nosso acervo</Styled.Title>
            <Styled.TableWrapper>
              <Table header={header} data={options} data_enum={data_enum} onCLick={setSelect} />
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

export default BookList;
