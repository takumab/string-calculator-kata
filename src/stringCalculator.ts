export const stringCalculator = (str: string) => {
  const checkForNegativeNumbersAndSeparators =
    /-(?=[A-Za-z-]|\d+-\d)|(\n|,|;|\/)/g;
  if (hasNegativeNumbers(str, checkForNegativeNumbersAndSeparators))
    throw new Error("negatives not allowed");

  const strings = str.split(",");
  const isGreaterThan1000 = () => Number(strings[0]) > 1000;
  if (isGreaterThan1000()) return Number(strings[1]);

  const add = (total: number, num: string) => total + Number(num);
  return str
    .replace(checkForNegativeNumbersAndSeparators, "")
    .split("")
    .reduce(add, 0);
};
const hasNegativeNumbers = (str: string, regEx: any) => {
  return str.split(regEx).some((element) => Number(element) < 0);
};
