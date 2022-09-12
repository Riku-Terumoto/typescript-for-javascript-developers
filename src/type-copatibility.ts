export {};

// 型の互換性
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

// undefined型
console.log(typeof fooCompatible);

// 代入できているのでanyとstringは互換性あり
fooCompatible = barCompatible;
console.log(fooCompatible);

// 代入したのでanyからstringに型が遷移している
console.log(typeof fooCompatible);

// 互換性がない場合
// stringとnumberは互換性無し
// TypeScriptで記述するときは常に互換性を意識する必要がある
let fooIncompatible: string;
let barIncompatible: number = 1;
// fooIncompatible = barIncompatible;

// 同じ型問題無し
let fooString: string;
let barString: string = 'string';
fooString = barString;

// 文字列リテラル型は文字列の一部だから問題無し
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

// 数値リテラル型は数値型の一部だから問題無し
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}
// meはAnimelを使って型宣言している
let me: Animal;

// meにPersonクラスのインスタンスが代入できている
// オブジェクトにオブジェクトを代入する場合は中身の方は関係ない
// ただ、代入元にある型は代入先でも必要になる
// これを構造的部分型と呼ぶ
me = new Person(43, 'てるりく');
