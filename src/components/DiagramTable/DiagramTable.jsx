import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMonthlyTotals,
  fetchTotals,
  setSelectedMonth,
  setSelectedYear,
} from 'redux/slices/financeSlice';
import InputDropdown from 'components/Inputs/InputDropDown';
import {
  BoxFooter,
  BoxHeading,
  BoxInputs,
  Category,
  ColorCategory,
  Expenses,
  Income,
  List,
  ListItem,
  StyledTable,
  Sum,
  EmptyLi,
} from './DiagramTable.styled';
import styled from 'styled-components';
import {
  formatStringWithSpaces,
  MakeDecimalPlaces,
} from 'utilities/formatUtils';
import {
  sumAmountByCategory,
  sumMonthlyIncomeAndExpenses,
} from 'utilities/sumMonthlyTotals';

const months = [
  { id: 1, name: 'January' },
  { id: 2, name: 'February' },
  { id: 3, name: 'March' },
  { id: 4, name: 'April' },
  { id: 5, name: 'May' },
  { id: 6, name: 'June' },
  { id: 7, name: 'July' },
  { id: 8, name: 'August' },
  { id: 9, name: 'September' },
  { id: 10, name: 'October' },
  { id: 11, name: 'November' },
  { id: 12, name: 'December' },
];

const monthsOptions = months.map(option => ({
  ...option,
  label: option.name,
  value: option.name.toLowerCase(),
}));

const getFullMonthName = monthNumber => {
  if (typeof monthNumber !== 'number' || monthNumber < 1 || monthNumber > 12) {
    return 'Month';
  }
  const fullMonthName = months.find(month => month.id === monthNumber);
  return fullMonthName.name;
};

const currentYear = new Date().getFullYear();

const getNumberRange = (start, end) => {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

const year = getNumberRange(currentYear - 5, currentYear).map(value => ({
  year: value,
}));

const yearOptions = year.map(option => ({
  ...option,
  label: option.year,
  value: option.year,
}));

const DiagramTableBase = () => {
  const dispatch = useDispatch();
  const backgroundColors = useSelector(state => state.finance.colors);
  const { totals, monthlyTotals, transactions, selectedMonth, selectedYear } =
    useSelector(state => state.finance);

  useEffect(() => {
    dispatch(fetchTotals());
  }, [dispatch, transactions]);

  const handleMonthChange = month => {
    dispatch(setSelectedMonth(month));
    if (selectedYear && month) {
      dispatch(fetchMonthlyTotals({ month, year: selectedYear }));
    }
  };

  const handleYearChange = year => {
    dispatch(setSelectedYear(year));
    if (selectedMonth && year) {
      dispatch(fetchMonthlyTotals({ month: selectedMonth, year }));
    }
  };

  const monthlyTotalsByCategory =
    Object.keys(monthlyTotals).length === 0
      ? null
      : sumAmountByCategory(monthlyTotals);

  const monthlyIncomeAndExpenses =
    Object.keys(monthlyTotals).length === 0
      ? null
      : sumMonthlyIncomeAndExpenses(monthlyTotals);

  const showTotals =
    selectedMonth && selectedYear && monthlyTotals && monthlyTotalsByCategory;

  const originalDataToMap = showTotals
    ? monthlyTotalsByCategory
    : totals.totalExpensesByCategories;

  let dataToMap;
  if (originalDataToMap) {
    const editedDataToMap = originalDataToMap.filter(
      obj => obj['category'] !== 'Income'
    );
    dataToMap = editedDataToMap.filter(obj => obj['amount'] !== 0);
  }

  const formatSum = num => formatStringWithSpaces(MakeDecimalPlaces(num));

  return (
    <StyledTable>
      <BoxInputs>
        {['Month', 'Year'].map((title, index) => (
          <InputDropdown
            key={index}
            title={selectedMonth ? getFullMonthName(selectedMonth) : title}
            options={index === 0 ? monthsOptions : yearOptions}
            onChange={([selected]) =>
              index === 0
                ? handleMonthChange(selected.id)
                : handleYearChange(selected.year)
            }
          />
        ))}
      </BoxInputs>
      <BoxHeading>
        <h3>Category</h3>
        <h3>Sum</h3>
      </BoxHeading>
      <List>
        {selectedMonth && !showTotals ? (
          <EmptyLi>
            The list of transactions in the selected month is empty!
          </EmptyLi>
        ) : dataToMap?.length > 0 ? (
          dataToMap.map((item, index) => (
            <ListItem key={index}>
              <ColorCategory
                style={{ backgroundColor: backgroundColors[index] }}
              ></ColorCategory>
              <Category>{item.category}</Category>
              <Sum>{formatSum(item.amount) || 0}</Sum>
            </ListItem>
          ))
        ) : (
          <li></li>
        )}
      </List>
      <BoxFooter>
        <Expenses>
          Expenses:{' '}
          <span>
            {showTotals && formatSum(monthlyIncomeAndExpenses.monthlyExpenses)}
            {!showTotals && !selectedMonth && formatSum(totals.totalExpenses)}
            {!showTotals && totals.totalExpenses && 0}
          </span>
        </Expenses>
        <Income>
          Income:{' '}
          <span>
            {showTotals && formatSum(monthlyIncomeAndExpenses.monthlyIncome)}
            {!showTotals && !selectedMonth && formatSum(totals.totalIncome)}
            {!showTotals && totals.totalIncome && 0}
          </span>
        </Income>
      </BoxFooter>
    </StyledTable>
  );
};

const DiagramTable = styled(DiagramTableBase)``;
export default DiagramTable;
