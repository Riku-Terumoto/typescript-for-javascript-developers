export {};

// enum型（列挙型）
// enum型は要素が複数あるのが大前提
// 文字を列挙するだけ
// この段階でシーケンス（連番）な番号が振られている(マウスホバーすると分かる)

enum Months {
  January,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

// アクセスするにはオブジェクトのプロパティを指定するような感じ
// 数値が出力される
// 数値に名前をつけて扱える
// console.log(Months.January);
// console.log(Months.February);
// console.log(Months.December);

// [INFO] 00:33:39 Restarting: /Users/terumotoriku/GitHub/typescript-for-javascript-developers/src/enum.ts has been modified
// Using ts-node version 8.5.4, typescript version 3.7.5
// 0
// 1
// 11

// これをバニラJSでやるとめんどくさい
const MonthsJs = {
  January: 0,
  February: 1,
};

// console.log(MonthsJs.January);
// console.log(MonthsJs.February);

// [INFO] 00:35:50 Restarting: /Users/terumotoriku/GitHub/typescript-for-javascript-developers/src/enum.ts has been modified
// Using ts-node version 8.5.4, typescript version 3.7.5
// 0
// 1

// ただ、enum型は通常インデックス番号で振られるが調整できるのか できます
// 先頭に1をつけるだけでインクリメントされる マウスホバーするとわかる
enum Months2 {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

// 文字列リテラルを初期化してあげることで文字列のenum型を作ることができる
enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}
// アクセス方法
let green = COLORS.GREEN;
console.log({ green });

// 元々YELLOWはなかったが再度同じenum型を作って宣言することによって追加できる
// 元のenumに追加でも良いが。。。
// 追加したキーが初期化忘れても周りの状態を見てエラー出してくれる
enum COLORS {
  YELLOW = '#FFFF00',
  // GRAY
  // 列挙型メンバーには初期化子が必要です。とエラーが出る
}

// JSの場合は存在しないキーでアクセスしてもエラーにはならないが、
// TSの場合はエラーになる
COLORS.YELLOW;
