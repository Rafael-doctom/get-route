const isString = value => typeof value == 'string';
const isArray = value => Array.isArray(value);
/*  */
const isCEP = value => isString(value) && value.length == 8;

export const isValidIndexes = (start, end) => start > -1 && end > -1;

export const isArrayOfCEPs = value => isArray(value) && value.every(isCEP);

export const isModeValid = mode => {
  const validModes = ['driving', 'walking'];

  return isString(mode) && validModes.includes(mode);
};
