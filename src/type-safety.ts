export {};

// 型安全
// TypeScriptだと再代入で宣言した型と違う値をいれてしまうとエラーになる
let isFinished: boolean = true;
// isFinished = 1;

// JavaScriptだと代入された値によって型が動的に変わってしまいエラーにならない
// TypeScriptは型指定してなくても型推論で自動的に型の指定が行われるので
// 現状、以下のコードはエラーとなるがjsファイルであれば動く
let isFinished1 = true;
// isFinished1 = 1;

// 静的に型の指定を行うことで意図しないデータの混粒を防ぐことができる
// これを型安全という
