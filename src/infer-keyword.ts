export {};

function add(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));

// inferは条件を記載する時に記述することができる特殊なキーワード
// 条件式の中で型を拾い上げたい時がある(今回は戻り値の型)
// 戻り値の型はどんなのがくるか分からないからinferで拾えるようにする
// 推論した戻り値の型を拾い上げて返す
type ReturnTypeFromAdd = ReturnType<typeof add>;
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
