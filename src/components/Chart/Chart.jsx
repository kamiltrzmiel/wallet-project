import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { formatBalance } from 'utilities/numberUtils';
import { ChartContainer, Balance } from './Chart.styled';
import { getRandomColor } from 'utilities/getRandomColor';
import {
  sumAmountByCategory,
  sumMonthlyIncomeAndExpenses,
} from 'utilities/sumMonthlyTotals';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const { totals, monthlyTotals, selectedMonth, selectedYear } = useSelector(
    state => state.finance
  );
  const totalBalance = useSelector(state => state.finance.totals.balance);

  const monthlyIncomeAndExpenses =
    Object.keys(monthlyTotals).length === 0
      ? null
      : sumMonthlyIncomeAndExpenses(monthlyTotals);

  const monthlyTotalsByCategory =
    Object.keys(monthlyTotals).length === 0
      ? null
      : sumAmountByCategory(monthlyTotals);

  const showTotals =
    selectedMonth && selectedYear && monthlyTotals && monthlyTotalsByCategory;

  let balance = 0;

  if (monthlyIncomeAndExpenses) {
    balance =
      monthlyIncomeAndExpenses.monthlyIncome -
      monthlyIncomeAndExpenses.monthlyExpenses;
  } else if (!showTotals && !selectedMonth) {
    balance = totalBalance;
  }

  const dataToMap = showTotals
    ? monthlyTotalsByCategory
    : totals.totalExpensesByCategories;

  console.log('datki do mapki', dataToMap);

  if (
    !dataToMap ||
    totals.totalExpensesByCategories.length === 0 ||
    (Object.keys(monthlyTotals).length === 0 && selectedYear)
  ) {
    return null;
  }

  const labels = dataToMap.map(item => item.category);
  const dataValues = dataToMap.map(item => item.amount);

  console.log('labelki', labels);
  console.log('wartości', dataValues);

  const backgroundColors = [];
  const numberOfColorsToGenerate = labels.length;

  for (let i = 0; i < numberOfColorsToGenerate; i++) {
    const color = getRandomColor(backgroundColors);
    backgroundColors.push(color);
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Amount of spending',
        data: dataValues,
        backgroundColor: backgroundColors,
        borderWidth: 0,
        weight: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '70%',
  };
  return (
    <ChartContainer>
      <Doughnut data={chartData} options={options} />
      <Balance>$ {formatBalance(balance)}</Balance>
    </ChartContainer>
  );
};

export default Chart;
