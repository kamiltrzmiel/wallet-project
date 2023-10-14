import moment from 'moment';

export const formatDate = inputString =>
  moment(inputString, 'DD MM YYYY HH:mm:ss GMTZZ').format('DD-MM-YYYY');

export const dateTransformer = (_, originalValue) =>
  moment(originalValue, 'DD-MM-YYYY').isValid()
    ? moment(originalValue, 'DD-MM-YYYY').toDate()
    : new Date('');

export const getCharacterValidationError = str =>
  `Password must have at least one ${str} character.`;

export const formatStringWithSpaces = text =>
  text.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const MakeDecimalPlaces = text => parseFloat(text).toFixed(2);

export const truncateString = (str, maxLength = 50) =>
  str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;

export const makeProperDate = date => {
  const [day, month, year] = date.split('-');
  return new Date(year, month - 1, day);
};
