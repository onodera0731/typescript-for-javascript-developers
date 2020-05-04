export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height); //returnを省略している

console.log(bmi(1.78, 86));
