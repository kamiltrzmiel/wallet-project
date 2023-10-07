export const getRatesFromLS = () => {
  const savedRates = localStorage.getItem('savedRates');

  if (savedRates) {
    try {
      const savedRatesJSON = JSON.parse(savedRates);

      if (savedRatesJSON) {
        const savedTimestamp = new Date(savedRatesJSON.timestamp);
        const currentTimestamp = new Date();

        const timeDifference =
          currentTimestamp.getTime() - savedTimestamp.getTime();
        const oneHour = 3600000;

        return timeDifference < oneHour ? savedRatesJSON.rates : null;
      }
    } catch (error) {
      console.error('There is something wrong with saved data');
    }
  }
};
