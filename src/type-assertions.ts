export {};

// 型アサーション
// any型に文字列が入っている状態
let name: any = 'Ham';

// nameの文字列の文字数を代入
// let length = name.length;
// let length: number = name.length;

// lengthはany型だが、数値が入っている変数に文字列を代入することは望ましくない
// lengthに直接、型宣言をする方法でも良いが、右辺によって型宣言を決める方法ができる
// それが以下、3種類ある

//型アサーション
// let length = name.length as number;
// let length = (name as string).length;
// 以下の型アサーションはjsx記法と似ている為、推奨されていない
let length = (<string>name).length;

// 型アサーションのおかげでnumberにはstringは代入できないエラーが発生
// length = 'foo';
