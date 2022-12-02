export const stringCalculator = (str: string) => {
  const regularExpression = /-(?=[A-Za-z-]|\d+-\d)|(\n|,|;|\/)/;
  const hasNegativeNumbers = str
    .split(regularExpression)
    .some((element) => Number(element) < 0)

  if (hasNegativeNumbers) throw new Error('negatives not allowed')

  const add =
    (total:number, num:string) => total + Number(num);

  return str.replace(/(\n|,|;|\/)/g, "")
    .split("")
    .reduce(add, 0)
};

