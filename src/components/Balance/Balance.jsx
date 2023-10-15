import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotals } from 'redux/slices/financeSlice';
import {
  BalanceSection,
  BalanceParagraph,
  AmountParagraph,
  AmountHolder,
} from './Balance.styled';
import { formatBalance } from 'utilities/numberUtils';

const Balance = () => {
  const dispatch = useDispatch();
  const difference = useSelector(state => state.finance.totals.balance);
  const balance = difference || 0;

  useEffect(() => {
    dispatch(fetchTotals());
  }, [dispatch]);

  return (
    <BalanceSection>
      <BalanceParagraph>Your Balance</BalanceParagraph>
      <AmountParagraph>
        <AmountHolder>$</AmountHolder> {formatBalance(balance)}
      </AmountParagraph>
    </BalanceSection>
  );
};

export default Balance;
