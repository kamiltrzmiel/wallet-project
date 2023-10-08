import { useSelector, useDispatch } from 'react-redux';
import { setIsModalEditTransactionOpen } from 'redux/slices/globalSlice';
import { removeTransaction } from 'redux/slices/financeSlice';
import { makeProperDate, formatDate } from 'utilities/formatUtils';
import { MainList, SecondList, StyledLi } from './TransactionsMobile.styled';

const TransactionsMobile = () => {
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
    <MainList>
      {sortedTransactions.map(
        ({ _id, amount, date, isIncome, category, comment }) => (
          <li key={_id}>
            <SecondList
              style={
                isIncome
                  ? { borderLeft: '5px solid #24CCA7' }
                  : { borderLeft: '5px solid #FF6596' }
              }
            >
              <StyledLi>
                <h4>Date</h4>
                <span>{formatDate(date)}</span>
              </StyledLi>
              <StyledLi>
                <h4>Type</h4>
                <span>{isIncome ? '+' : '-'}</span>
              </StyledLi>
              <StyledLi>
                <h4>Category</h4>
                <span>{category}</span>
              </StyledLi>
              <StyledLi>
                <h4>Comment</h4>
                <span>{comment}</span>
              </StyledLi>
              <StyledLi>
                <h4>Sum</h4>
                <span>{amount}</span>
              </StyledLi>
              <StyledLi>
                <button type="button" onClick={deleteHandler}>
                  Delete
                </button>
                <button type="button" onClick={handleOpenEditModal}>
                  Edit
                </button>
              </StyledLi>
            </SecondList>
          </li>
        )
      )}
    </MainList>
  );
};

export default TransactionsMobile;
