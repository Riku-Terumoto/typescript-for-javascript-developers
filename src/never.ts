export {};

// never型
// 関数の中で例外を起こす場合(戻り値もなし)
// 呼び元に戻ってこない
// voidやanyは絶対返ってくる 値が無かったらundefinedが返ってくる
function error(message: string): never {
  // 例外エラーを発生させている
  throw new Error(message);
}

// errorで例外を発生させてcatchをわざと動かしている
// 例外の内容をcatchの引数で受け取って出力している
try {
  let result = error('test');
  // resultはnever型で戻り値が返ってこない
  console.log({ result });
} catch (error) {
  console.log({ error });
}

// void型はundefineが含まれるから代入可能
let foo: void = undefined;
// never型は値という概念が無いので代入できず、エラーとなる
// let bar: never = undefined;
// never型を返すものはnever型の変数に代入可能
let bar: never = error('only me!');
