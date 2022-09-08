export {};

const reducer = (previousValue: number, currentValue: number): number => {
  console.log({ previousValue, currentValue });
  return previousValue + currentValue;
};

// Restパラメータ
// 引数の値が予測できない場合、何個でもいいよっていうのがRestパラメータ
const sum = (...values: number[]): number => {
  // console.log(values);
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));

// [1, 2, 3, 4].reduce(reducer);

// reduce() メソッドは、配列のそれぞれの要素に対して、順番通りに、ユーザーが提供した「縮小」コールバック関数を呼び出します。その際、直前の要素における計算結果の返値を渡します。配列のすべての要素に対して縮小関数を実行した結果が単一の値が最終結果になります。
// コールバックの初回実行時には「直前の計算の返値」は存在しません。 初期値が与えらえた場合は、代わりに使用されることがあります。 そうでない場合は、配列の要素 0 が初期値として使用され、次の要素（0 の位置ではなく 1 の位置）から反復処理が開始されます。

// reduce() で一番わかりやすいのは、配列のすべての要素の和を返す場合でしょう。

// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// expected output: 10
