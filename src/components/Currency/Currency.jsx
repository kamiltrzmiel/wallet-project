import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectCurrency,
  // selectIsLoading,
  //   selectError,
} from 'redux/currency/selectors';
import { fetchCurrency } from 'redux/currency/operations';
import { StyledTable, StyledTh, StyledTd, StyledTr } from './Currency.styled';

export const Currency = () => {
  const dispatch = useDispatch();
  const rates = useSelector(selectCurrency);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  return (
    <>
      <StyledTable>
        <thead>
          <StyledTr>
            <StyledTh>Currency</StyledTh>
            <StyledTh>Purchase</StyledTh>
            <StyledTh>Sale</StyledTh>
          </StyledTr>
        </thead>

        <tbody>
          {rates.map((item, index) => (
            <StyledTr key={index}>
              <StyledTd>{item.currency}</StyledTd>
              <StyledTd>{item.purchase}</StyledTd>
              <StyledTd>{item.sale}</StyledTd>
            </StyledTr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};
