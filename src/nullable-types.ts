export {};

// Nullable Types
// デフォルトでtsconfigでstrictNullChecksがtrueになっている為、nullをチェックしてnullが入れられないものかチェックできる
// 上記のオプションをfalseにすると型関係なく、nullの設定をすることができてしまう
// 一般的にはstrictNullChecksはtrueが望ましい
// それでもnullを設定したい場合がある
// その場合はUnion型を使う
// let profile: { name: string; age: number } = {
//   name: 'Ham',
//   age: null,
// };
let profile: { name: string; age: number | null } = {
  name: 'Ham',
  age: null,
};

// nullでの上書きも許容してしまう
// profile = null;
