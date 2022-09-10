import {
  AmountTransaction,
  CurrencyTransaction,
  RowTransaction,
  TypeTransaction,
} from './TransactionRow.styled';

export const TransactionRow = ({ type, amount, currency, index }) => (
  <RowTransaction index={index}>
    <TypeTransaction>{type}</TypeTransaction>
    <AmountTransaction>{amount}</AmountTransaction>
    <CurrencyTransaction>{currency}</CurrencyTransaction>
  </RowTransaction>
);
