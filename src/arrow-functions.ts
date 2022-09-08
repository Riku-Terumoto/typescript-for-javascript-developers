export {};

// アロー関数（ラムダ式）による関数定義

// let bmi = (height: number, weight: number): number => {
//   return weight / (height * height);
// };

// 型推論を使用した場合
let bmi: (height: number, weight: number) => number = (height, weight) =>
  weight / (height * height);

console.log(bmi(1.78, 86));
