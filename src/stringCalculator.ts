export const stringCalculator = (str: string) => {
  const checkForNegativeNumbersAndSeparators =
    /-(?=[A-Za-z-]|\d+-\d)|(\n|,|;|\/)/g;

  if (hasNegativeNumbers(str, checkForNegativeNumbersAndSeparators))
    throw new Error("negatives not allowed");

  const strings = str.split(",");
  for (let i = 0; i < strings.length; i++) {
    if (isGreaterThan1000(strings)) return Number(strings[i + 1]);
  }

  const add = (total: number, num: string) => total + Number(num);
  return str
    .replace(checkForNegativeNumbersAndSeparators, "")
    .split("")
    .reduce(add, 0);
};

const hasNegativeNumbers = (str: string, regEx: any) => {
  return str.split(regEx).some((element) => Number(element) < 0);
};

const isGreaterThan1000 = (arr: string[]) => {
  return arr.some((num) => Number(num) > 1000);
};
