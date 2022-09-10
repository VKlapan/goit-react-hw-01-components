import { TransactionRow } from './TransactionRow';
import { Table, Thead, RowHead, TitleTable } from './TransactionsTable.styled';

export const TransactionsTable = ({ transactions }) => (
  <Table>
    <Thead>
      <RowHead>
        <TitleTable>Type</TitleTable>
        <TitleTable>Amount</TitleTable>
        <TitleTable>Currency</TitleTable>
      </RowHead>
    </Thead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }, index) => (
        <TransactionRow
          key={id}
          type={type}
          amount={amount}
          currency={currency}
          index={index}
        />
      ))}
    </tbody>
  </Table>
);
