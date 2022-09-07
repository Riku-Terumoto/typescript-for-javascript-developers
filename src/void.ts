export {};

// 関数の戻り値に対しての型定義
// 型はvoidまたはanyで無くてはならない
// returnしない関数であればvoidにする
// voidかany以外であれば何かしらreturnを返さないといけない（何もない場合はundefinedを返す）
function returnNothing(): void {
  console.log("I don't return anything!");
}

console.log(returnNothing());

// 戻り値がない関数とvoid型 (void type)
// TypeScriptで戻り値がない関数の戻り値を型注釈するにはvoid型を用います。void型は関数の戻り値を型注釈するためにある特別な型です。

// undefined型とvoid型の違い
// JavaScriptの関数では、戻り値がない場合は値としてundefinedを返します。またTypeScriptにはundefined型もあります。TypeScriptの型上の意味としては、undefined型とvoid型は同じです。したがって、戻り値の型注釈にundefinedを用いることもできます。ただし、戻り値型がundefined型の場合は、return undefinedが必要です。
