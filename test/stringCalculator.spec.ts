import {stringCalculator} from "../src/stringCalculator";

describe('String Calculator', () => {
  it.each`
    sum | commaSeparatedString
    ${0}| ${""}
    ${1}| ${"1"}
    ${2}| ${"2"}
    ${3}| ${"1,2"}
    ${7}| ${"3,4"}
    ${6}| ${"1,2,3"}
    ${15}| ${"4,5,6"}
    ${10}| ${"2,2,2,2,2"}
    ${45}| ${"1,2,3,4,5,6,7,8,9"}
    ${3}| ${"1\n2"}
    ${6}| ${"1\n2\n3"}
    ${15}| ${"4\n5,6"}
    ${3}| ${"//;\n1;2"}
  `('should return $sum when passed $commaSeparatedString', ({sum, commaSeparatedString}) => {
    const result = stringCalculator(commaSeparatedString)
    expect(result).toBe(sum)
  })
  it('should not allow negative number 2', () => {
    expect(() => stringCalculator("1, -2")).toThrow(new Error("negatives not allowed"))
  });

  it('should not allow negative numbers 4 and 3', () => {
    expect(() => stringCalculator("1, -4, -3")).toThrow(new Error("negatives not allowed"))
  });
});
