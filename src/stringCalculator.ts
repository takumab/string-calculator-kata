export const stringCalculator = (stringOfNumbers: string) => {
  const checkForNegativeNumbersAndSeparators =
    /-(?=[A-Za-z-]|\d+-\d)|(\n|,|;|\/)/g;

  if (hasNegativeNumbers(stringOfNumbers, checkForNegativeNumbersAndSeparators))
    throw new Error("negatives not allowed");

  const arrayOfNumbers = stringOfNumbers.split(",");
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (isGreaterThan1000(arrayOfNumbers[i]))
      return Number(arrayOfNumbers[i + 1]);
  }

  const add = (total: number, num: number) => total + num;
  const toNumber = (num: string) => Number(num);
  return stringOfNumbers
    .replace(checkForNegativeNumbersAndSeparators, "")
    .split("")
    .map(toNumber)
    .reduce(add, 0);
};

const hasNegativeNumbers = (stringOfNumbers: string, regEx: any) =>
  stringOfNumbers.split(regEx).some((num) => Number(num) < 0);

const isGreaterThan1000 = (num: string) => {
  return Number(num) > 1000;
};
