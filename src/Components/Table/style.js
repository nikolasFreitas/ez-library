import React from 'react';
import Styled from 'styled-components';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export const S_table = Styled(Table)`
  border-collapse: collapse;
`;

export const S_Thead = Styled(Thead)``;

export const S_tr = Styled(Tr)`
  &:nth-child(2n) {
    background: #bdc3c7;
  }
`;

export const S_Tbody = Styled(Tbody)`
  ${S_tr} {
    cursor: pointer;
  }
`;

export const S_th = Styled(Th)`
  border-right: 1px solid black;
  background: #9b59b6;
  padding: 10px 0px;
  color: white;

  &:last-child {
    border-right: 0px;
  }
`;

export const S_td = Styled(Td)`
  border: 1px solid black;
  padding: 10px 15px;

`;
