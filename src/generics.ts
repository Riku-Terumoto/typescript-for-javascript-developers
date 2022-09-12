export {};

// ジェネリクス型
// TypeSctipでは汎用的なクラス、メソッドに対して特定の型を紐づけることを言う
// 型は違えどやっていることは同じものに対して、新たに別の型のメソッドを追加するのはコストが掛かる
// それを解消するのがジェネリクス

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

// ジェネリクス関数の定義
// Tが抽象的な型を意味している(number、stringにもなる)
// 型引数と呼ぶ
// 引数の型と戻り値の型は同様にTなので一致していることになる
const echo = <T>(arg: T): T => {
  return arg;
};
//使い方
// 型の指定と引数の値を入れる
console.log(echo<number>(100));
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));

// 通常のクラス
// class Mirror {
//   constructor(public value: number) {}

//   echo(): number {
//     return this.value;
//   }
// }

// console.log(new Mirror(123).echo());

// ジェネリクス適用クラス
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, generics!').echo());
console.log(new Mirror<boolean>(true).echo());
