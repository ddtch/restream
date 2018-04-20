export const isString = (val) => {
  const stringRegex = /^[A-Za-zА-Яа-я]+$/;
  return stringRegex.test(val);
};

export const isNumber = (val) => {
  const numRegex = /^\d+$/;
  return numRegex.test(val);
};