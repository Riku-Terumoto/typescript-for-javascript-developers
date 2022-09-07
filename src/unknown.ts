export {};

// unknown型
// 型が不明という意味
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// typeofは型を取得することができる
// console.log(typeof numberUnknown);

// if条件はnumberであればtrue
// 型が不安な場合はunknownとifを組み合わせて使う
// typeofを使ってある特定の型を確認しながらコードを安全に実行させることをタイプガードという
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}

// 以下でエラーが起きるのは型が不明なので計算できないかもしれないというエラー
// コードがJavaScriptだったらnumberUnknownが数値以外でもエラーにならない
// 気づくのは早くてもプログラムを実行した際（早期発見が困難 TypeScriptのany型も同様）
// 何が入るかわからない場合はunknown型にすることでエラーが出る = 中身を確認する = デバックに役立つ

// let sumUnknown = numberUnknown + 10;
