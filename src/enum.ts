export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  Nobember,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

//javascriptのケース
// const MonthsJs = {
//   January: 0,
//   February: 1,
// };

// console.log(MonthsJs.January);
// console.log(MonthsJs.February);

//javascriptのケース
// const MonthsJs = {
//   January: 0,
//   February: 1,
// };
// console.log(MonthsJs.January);
// console.log(MonthsJs.February);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  //   YELLOW = '#FFFF00',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#FFFFF00',
  GRAY = '#808080',
}

COLORS.YELLOW;
