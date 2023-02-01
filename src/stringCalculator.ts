export const stringCalculator = (stringOfNumbers: string) => {
  const checkForNegativeNumbersAndSeparators =
    /-(?=[A-Za-z-]|\d+-\d)|(\n|,|;|\/)/g;

  if (hasNegativeNumbers(stringOfNumbers, checkForNegativeNumbersAndSeparators))
    throw new Error("negatives not allowed");

  const arrayOfNumbers = stringOfNumbers.split(
    checkForNegativeNumbersAndSeparators
  );
  const toNumber = (num: string) => Number(num);
  const isNotANumber = (num: number) => !isNaN(num);
  const add = (total: number, num: number) => total + num;
  return arrayOfNumbers
    .map(toNumber)
    .filter(isNotANumber)
    .filter(isLessThan1000)
    .reduce(add, 0);
};

const hasNegativeNumbers = (stringOfNumbers: string, regEx: any) =>
  stringOfNumbers.split(regEx).some((num) => Number(num) < 0);

const isLessThan1000 = (num: number) => num < 1000;
