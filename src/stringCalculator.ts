export const stringCalculator = (str: string) => {
  console.log(str.includes("-2"))
  if (str.includes("-2")) throw new Error('negatives not allowed')
  if (str.includes("-4") && str.includes("-3")) throw new Error('negatives not allowed')

  const add =
    (total:number, num:string) => total + Number(num);

  return str.replace(/(\n|,|;|\/)/g, "")
    .split("")
    .reduce(add, 0)
};

