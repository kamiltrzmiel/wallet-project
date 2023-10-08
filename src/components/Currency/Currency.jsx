import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectCurrency,
  selectIsLoading,
  selectError,
} from 'redux/currency/selectors';
import { fetchCurrency } from 'redux/currency/operations';
import {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledTr,
  CurrencyBox,
  CurrencyLoader,
  ErrorMsg,
} from './Currency.styled';

const Currency = () => {
  const dispatch = useDispatch();
  const rates = useSelector(selectCurrency);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <CurrencyBox>
          <CurrencyLoader>-$-</CurrencyLoader>
        </CurrencyBox>
      )}
      {rates.length > 1 && (
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
      )}
      {error && (
        <CurrencyBox>
          <ErrorMsg>
            Sorry, there was an error retrieving current exchange rate data :c
          </ErrorMsg>
        </CurrencyBox>
      )}
    </>
  );
};

export default Currency;
