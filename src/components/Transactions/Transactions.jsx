import { useSelector, useDispatch } from 'react-redux';
import { setIsModalEditTransactionOpen } from 'redux/slices/globalSlice';
import { removeTransaction } from 'redux/slices/financeSlice';
import { makeProperDate, formatDate } from 'utilities/formatUtils';

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
    <table style={{ textAlign: 'center' }}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Sum</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {sortedTransactions.map(
          ({ _id, amount, date, isIncome, category, comment }) => (
            <tr key={_id}>
              <td>{formatDate(date)}</td>
              <td>{isIncome ? '+' : '-'}</td>
              <td>{category}</td>
              <td>{comment}</td>
              <td>{amount}</td>
              <td>
                <button type="button" onClick={handleOpenEditModal}>
                  Edit
                </button>
                <button type="button" onClick={deleteHandler}>
                  Delete
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Transactions;
