export {};

function add(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));

// 指定した関数の戻り値の型を使用したい場合にReturnTypeを使用する
type ReturnTypeFromAdd = ReturnType<typeof add>;
