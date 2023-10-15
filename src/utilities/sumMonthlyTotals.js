export const sumAmountByCategory = monthlyTotals => {
  const categorySums = [];

  for (const entry of monthlyTotals) {
    const category = entry.category;
    const amount = entry.amount;

    const categoryObject = categorySums.find(obj => obj.category === category);

    categoryObject
      ? (categoryObject.amount += amount)
      : categorySums.push({ category, amount });
  }

  return categorySums.filter(obj => obj.category !== 'income');
};

export const sumMonthlyIncomeAndExpenses = monthlyTotals => {
  let monthlyIncome = 0;
  let monthlyExpenses = 0;

  for (const entry of monthlyTotals) {
    const isIncome = entry.isIncome;
    const amount = entry.amount;

    if (isIncome) {
      monthlyIncome += amount;
    } else {
      monthlyExpenses += amount;
    }
  }

  return { monthlyIncome, monthlyExpenses };
};
