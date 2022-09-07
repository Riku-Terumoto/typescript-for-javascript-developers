export {};

// intersection型(交差型)
type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

// Batter1にはthrowingSpeedのプロパティは無いので持たせられない
// 新たに混合型のエイリアスを作成しないといけない
const OchiaiHiromitsu: Batter1 = {
  // throwingSpeed: 154,
  battingAverage: 0.367,
};

// 複数のタイプエイリアスのプロパティを新たに作成したエイリアスに追加した
// 本当に以下のようにしないといけないのか
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

// この一行で上記のTwoWayPlayerと同じになる
// 既存の型をどんどん追加していって新しい型を作れる（メンテナンス性をあげる）
// これをintersection型
type TwoWayPlayer = Pitcher1 & Batter1;

// ちゃんとintersection型は使える
const OtaniShouhe: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
