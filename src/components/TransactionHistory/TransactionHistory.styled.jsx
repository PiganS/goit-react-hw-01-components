import styled from 'styled-components';

export const TableTransactions = styled.table`
  width: 600px;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 10px 10px 31px -3px rgba(0,0,0,0.75);
 -webkit-box-shadow: 10px 10px 31px -3px rgba(0,0,0,0.75);
 -moz-box-shadow: 10px 10px 31px -3px rgba(0,0,0,0.75);
`;

export const TableTr = styled.tr`
  background: #000000;
  background: -webkit-linear-gradient(to bottom, #434343, #000000);
  background: linear-gradient(to bottom, #434343, #000000);
`;

export const TableTitle = styled.th`
  color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  &:nth-child(even) {
    background-color: #b4b4b4b9;
  }
  &:nth-child(odd) {
    background-color: #ffffff;
  }
`;

export const TableItem = styled.td`
  padding: 10px;
  text-align: center;
  text-transform: capitalize;
`;
