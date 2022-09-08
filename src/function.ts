export {};

// functionキーワードによる関数定義
// 関数での型は引数と戻り値に関心を持つ必要がある
// 引数に対してはそのまま設定
// 戻り値に対しては関数自体に設定するので丸括弧の後に記述
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.78, 86));
