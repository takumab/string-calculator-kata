export const stringCalculator = (str: string) => {
  const add =
    (total:number, num:string) => total + Number(num);

  return str.replace(/(\n|,|;|\/)/g, "")
    .split("")
    .reduce(add, 0)
};

