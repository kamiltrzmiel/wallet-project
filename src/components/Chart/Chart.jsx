import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { formatBalance } from 'utilities/numberUtils';
import { ChartContainer, Balance } from './Chart.styled';
import { getRandomColor } from 'utilities/getRandomColor';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const { totals } = useSelector(state => state.finance);
  // const { totals, monthlyTotals } = useSelector(state => state.finance);
  const balance = useSelector(state => state.finance.totals.balance);

  // const showTotals = monthlyTotals && monthlyTotals.totals;
  // const dataToMap = showTotals
  //   ? monthlyTotals.totals
  //   : totals.totalExpensesByCategories;
  const dataToMap = totals.totalExpensesByCategories;

  if (!dataToMap || totals.totalExpensesByCategories.length === 0) {
    return null;
  }
  const labels = dataToMap.map(item => item.category);
  const dataValues = dataToMap.map(item => item.amount);

  // const balance = showTotals
  //   ? monthlyTotals.difference
  //   : totals.difference || 0;

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
