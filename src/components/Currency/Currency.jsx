import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectCurrency,
  //   selectIsLoading,
  //   selectError,
} from 'redux/currency/selectors';
import { fetchCurrency } from 'redux/currency/operations';
import { StyledTable, StyledTh, StyledTd } from './Currency.styled';

export const Currency = () => {
  const dispatch = useDispatch();
  const rates = useSelector(selectCurrency);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>Currency</StyledTh>
          <StyledTh>Purchase</StyledTh>
          <StyledTh>Sale</StyledTh>
        </tr>
      </thead>

      <tbody>
        {rates.map((item, index) => (
          <tr key={index}>
            <StyledTd>{item.currency}</StyledTd>
            <StyledTd>{item.purchase}</StyledTd>
            <StyledTd>{item.sale}</StyledTd>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
