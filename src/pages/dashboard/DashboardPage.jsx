import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransactions } from 'redux/slices/financeSlice';
import { Title } from './DashboardPage.styled';
import Transactions from 'components/Transactions/Transactions';
import TransactionsMobile from 'components/TransactionsMobile/TransactionsMobile';
import ButtonAddTransaction from 'components/ButtonAddTransaction/ButtonAddTransaction';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Title as="h1">DashboardPage</Title>
      {isMobile ? <TransactionsMobile /> : <Transactions />}
      {isMobile && <ButtonAddTransaction />}
    </>
  );
};

export default DashboardPage;
