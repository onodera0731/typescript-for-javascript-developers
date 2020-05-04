export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAberage: number;
};

const daimajiniSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const ochiaiHiromitsu: Batter1 = {
  battingAberage: 0.367,
};

// type TwoWayPayler = {
//   throwingSpeed: number;
//   battingAberage: number;
// };

type TwoWayPayler = Pitcher1 & Batter1; //intersection型

const OtaniShouhei: TwoWayPayler = {
  throwingSpeed: 165,
  battingAberage: 0.287,
};
