import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BalanceSection,
  BalanceParagraph,
  AmountParagraph,
  ValueHolder,
} from './Balance.styled';


const Balance = () => {
  return (
    <BalanceSection>
      <BalanceParagraph>Your Balance</BalanceParagraph>
      <AmountParagraph>
        <ValueHolder>$</ValueHolder> 
      </AmountParagraph>
    </BalanceSection>
  );
};

export default Balance;
