import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import * as Styled from './style';
import { book_options } from './helpers';

const BookList = () => {
  const [select, setSelect] = useState(false);
  const [options, setOptions] = useState(book_options)

  console.log(select);
  return (
    <Styled.Container>
      <Styled.BoxContent>
        <Select options={book_options} onChange={setSelect} value={select} />
      </Styled.BoxContent>
    </Styled.Container>
  );
};

export default BookList;
