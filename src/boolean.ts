// export {}をなぜ記述するのか
// これを記述すると空のオブジェクトを渡すことになる boolean.tsの中身はコンポーネント化される
// （exportは他ファイルで使えるようにする役割がある）
// 記述しないとグローバル環境に変数を宣言したことになり、他のファイルで
// 宣言されている変数と被ってしまう可能性があるから
export {};

let name = 'TypeScript';

// boolean型
let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished });
