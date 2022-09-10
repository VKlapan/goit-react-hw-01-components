import styled from '@emotion/styled';

export const RowTransaction = styled.tr`
  text-align: left;
  background-color: ${props =>
    props.index % 2 === 1 ? props.theme.colors.secondaryTable : 'white'};
`;

export const TypeTransaction = styled.td`
  padding-left: ${props => props.theme.space[5]}px;
`;

export const AmountTransaction = styled.td`
  padding-left: ${props => props.theme.space[5]}px;
`;

export const CurrencyTransaction = styled.td`
  padding-left: ${props => props.theme.space[5]}px;
`;
