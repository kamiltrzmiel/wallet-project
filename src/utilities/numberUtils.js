const validateNumber = number => {
  if (typeof number !== 'number') {
    throw new Error('Input must be a number');
  }
};

export const fixToTwoDecimals = number => {
  validateNumber(number);
  return parseFloat(number.toFixed(2));
};

export const formatWithSpaces = number => {
  validateNumber(number);
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const formatCompactNumber = number => {
  validateNumber(number);

  const thousand = 1000;
  const million = 1000000;
  const billion = 1000000000;

  if (Math.abs(number) >= billion) {
    return `${(number / billion).toFixed(2)}B`;
  } else if (Math.abs(number) >= million) {
    return `${(number / million).toFixed(2)}M`;
  } else if (Math.abs(number) >= thousand) {
    return `${(number / thousand).toFixed(2)}K`;
  } else {
    return number.toFixed(2);
  }
};

export const formatBalance = num => {
  validateNumber(num);
  if (Math.abs(num) > 10000000) {
    return formatCompactNumber(num);
  }
  return formatWithSpaces(fixToTwoDecimals(num));
};
