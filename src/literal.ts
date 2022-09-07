export {};

/** Literal型 */
// 文字列のLiteral型
// 型が文字列だけれども内容が想定していないもの時はLiteral型を使う
// 型の指定はもちろん、型の内容まで制約を持たせることができる
// LiteralとUnionを組み合わせるとだいぶ厳しい制約ができる
// 例)文字列の曜日指定
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';
// dayOfTheWeek = '31';

// 数値のLteral型
// 例)数値の月
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13;

// booleanのLiteral型
// true型オンリーで指定もできる
let TRUE: true = true;
// TRUE = false;
