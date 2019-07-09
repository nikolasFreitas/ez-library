import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../../../Components/Table';
import * as Styled from './style';

const ReserveBook = ({ header, option, data_enum, clickHandler }) => {
  const data_enum_handler = [...data_enum];
  if (!option.returned) {
    data_enum_handler.push('submit');
    option.submit = <Styled.Button onClick={clickHandler}>RESERVAR</Styled.Button>;
  }
  return (
    <Styled.Box>
      <Table header={header} data={[option]} data_enum={data_enum_handler} />
    </Styled.Box>
  );
};

ReserveBook.propTypes = {
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  data_enum: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickHandler: PropTypes.func,
};

ReserveBook.defaultProps = {
  clickHandler: () => {},
};

export default ReserveBook;
