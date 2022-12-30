export const stringCalculator = (stringOfNumbers: string) => {
  const checkForNegativeNumbersAndSeparators =
    /-(?=[A-Za-z-]|\d+-\d)|(\n|,|;|\/)/g;

  if (hasNegativeNumbers(stringOfNumbers, checkForNegativeNumbersAndSeparators))
    throw new Error("negatives not allowed");

  const stringyfiedNumbers = stringOfNumbers.split(",");
  for (let i = 0; i < stringyfiedNumbers.length; i++) {
    if (isGreaterThan1000(stringyfiedNumbers[i]))
      return Number(stringyfiedNumbers[i + 1]);
  }

  const add = (total: number, num: string) => total + Number(num);
  return stringOfNumbers
    .replace(checkForNegativeNumbersAndSeparators, "")
    .split("")
    .reduce(add, 0);
};

const hasNegativeNumbers = (stringOfNumbers: string, regEx: any) =>
  stringOfNumbers.split(regEx).some((num) => Number(num) < 0);

const isGreaterThan1000 = (stringyfiedNumber: string) =>
  Number(stringyfiedNumber) > 1000;
