export const getRandomColor = colors => {
  const letters = '0123456789ABCDEF';
  let color;

  do {
    color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  } while (colors.includes(color));

  return color;
};
