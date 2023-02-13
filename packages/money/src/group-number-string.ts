// 10000000 => 10 000 000
// 100000.34 => 100 000.34
export const groupNumberString = (numberString: string | number) => {
  const prepared = typeof numberString === 'number' ? String(numberString) : numberString;
  const [integer, fraction] = prepared.split('.');
  const fractionPart = typeof fraction === 'undefined' ? '' : `.${fraction}`;
  const groupedInteger = integer.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
  return `${groupedInteger}${fractionPart}`;
};
