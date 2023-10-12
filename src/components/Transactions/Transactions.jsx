import { useSelector, useDispatch } from 'react-redux';
import { setIsModalEditTransactionOpen } from 'redux/slices/globalSlice';
import { removeTransaction } from 'redux/slices/financeSlice';
import { makeProperDate, formatDate } from 'utilities/formatUtils';
import {
  formatStringWithSpaces,
  MakeDecimalPlaces,
} from 'utilities/formatUtils';
import {
  TransactionTableData,
  TransactionsBodyHeadRow,
  TransactionsTable,
  TransactionsTableHead,
  TransactionsTableHeadRow,
  TransactionsTableHeader,
} from './Transactions.styled';
import { DeleteButton } from 'components/Buttons/Buttons';
import editIcon from '../../assets/icons/editIcon.svg';
import { EditBtn } from 'components/TransactionsMobile/TransactionsMobile.styled';

const Transactions = () => {
  const { transactions } = useSelector(state => state.finance);
  const dispatch = useDispatch();

  const sortedTransactions = transactions.slice().sort((a, b) => {
    return makeProperDate(b.date) - makeProperDate(a.date);
  });

  const handleOpenEditModal = () => {
    dispatch(setIsModalEditTransactionOpen(true));
  };

  const deleteHandler = id => {
    dispatch(removeTransaction(id));
  };

  return (
    <TransactionsTable>
      <TransactionsTableHead>
        <TransactionsTableHeadRow>
          <TransactionsTableHeader>Date</TransactionsTableHeader>
          <TransactionsTableHeader>Type</TransactionsTableHeader>
          <TransactionsTableHeader>Category</TransactionsTableHeader>
          <TransactionsTableHeader>Comment</TransactionsTableHeader>
          <TransactionsTableHeader>Sum</TransactionsTableHeader>
          <TransactionsTableHeader />
        </TransactionsTableHeadRow>
      </TransactionsTableHead>

      <tbody>
        {sortedTransactions.map(
          ({ _id, amount, date, isIncome, category, comment }) => (
            <TransactionsBodyHeadRow key={_id}>
              <TransactionTableData>{formatDate(date)}</TransactionTableData>
              <TransactionTableData>
                {isIncome ? '+' : '-'}
              </TransactionTableData>
              <TransactionTableData>{category}</TransactionTableData>
              <TransactionTableData>{comment}</TransactionTableData>
              <TransactionTableData
                style={isIncome ? { color: '#24CCA7' } : { color: '#FF6596' }}
              >
                {formatStringWithSpaces(MakeDecimalPlaces(amount))}
              </TransactionTableData>
              <TransactionTableData>
                <EditBtn type="button" onClick={handleOpenEditModal}>
                  <img
                    src={editIcon}
                    alt="edit icon"
                    width="16px"
                    height="16px"
                  />
                </EditBtn>
                <DeleteButton type="button" onClick={() => deleteHandler(_id)}>
                  Delete
                </DeleteButton>
              </TransactionTableData>
            </TransactionsBodyHeadRow>
          )
        )}
      </tbody>
    </TransactionsTable>
  );
};

export default Transactions;
