import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import * as Styled from './style';
import { book_options, transformToComponent } from './helpers';
import Table from '../../Components/Table';

const data_enum = ['label', 'dayOfLoan', 'devolutionDate', 'returned'];
const header = ['Nome do livro', 'Data de ínicio de empréstimo', 'Data de devolução', 'Disponível'];

const BookList = memo(() => {
  const [select, setSelect] = useState(false);
  const [options, setOptions] = useState(
    transformToComponent(
      book_options,
      <Styled.AvailableText>Disponível</Styled.AvailableText>,
      <Styled.RentedText>Alugado</Styled.RentedText>,
      'returned'
    )
  );

  return (
    <Styled.Container>
      <Styled.BoxContent>
        <Select options={book_options} onChange={setSelect} value={select} />
        <Styled.TableWrapper>
          <Table header={header} data={options} data_enum={data_enum} onCLick={setSelect} />
        </Styled.TableWrapper>
      </Styled.BoxContent>
    </Styled.Container>
  );
});

export default BookList;
