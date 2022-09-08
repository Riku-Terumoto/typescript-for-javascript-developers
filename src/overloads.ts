export {};

// オーバーロード・・・名前が同じ関数が複数あり引数や処理の内容が違うこと
// 定義が重複しているからエラーが出る
// オーバロードするにはシグネチャする必要がある
// シグネチャとは、関数の処理の実態は書かずに関数の名前、引数、戻り値の型を宣言したもの 関数の概略みたいなもの
// めちゃくちゃ便利らしい

// シグネチャ
function double(value: number): number;
function double(value: string): string;

// シグネチャで型制約した実態の方はany型で全ての型を受け取れるようにする
// シグネチャで型制約してるから型安全になっている
function double(value: any): any {
  // 関数実行を数値と文字列で実行しているから型取得も両方出力される
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

// function double(value: string): string {
//   return value + value;
// }

console.log(double(100));
console.log(double('Go '));
// シグネチャ以外の型が来たらコンパイルエラーで処理が実行されない
// シグネチャでちゃんと型安全となっている
// console.log(double(true));
