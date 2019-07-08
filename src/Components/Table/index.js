import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const Table = ({ header, data, data_enum, onCLick }) => (
  <Styled.S_table>
    <Styled.S_Thead>
      <Styled.S_tr>
        {header && header.map((item, i) => <Styled.S_th key={`header-${i}`}>{item}</Styled.S_th>)}
      </Styled.S_tr>
    </Styled.S_Thead>
    <Styled.S_Tbody>
      {data &&
        data.map((row, i) => (
          <Styled.S_tr onClick={() => onCLick(row)} key={`table-${i}`}>
            {data_enum &&
              data_enum.map((eachEnum, k) => (
                <Styled.S_td key={`row-${row[eachEnum]}-${i}`}>{row[eachEnum]}</Styled.S_td>
              ))}
          </Styled.S_tr>
        ))}
    </Styled.S_Tbody>
  </Styled.S_table>
);

Table.propTypes = {
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  data_enum: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCLick: PropTypes.func,
};

Table.defaultProps = {
  onCLick: () => {},
};

export default Table;
