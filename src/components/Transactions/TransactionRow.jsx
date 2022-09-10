import PropTypes from 'prop-types';
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

TransactionRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
