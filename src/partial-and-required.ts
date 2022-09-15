export {};

//Utility Type
// TypeScriptが標準で備わっている便利な方
// 一つ目がpartial型・・・オプショナルに切り替える

// type Profile = {
//   name: string;
//   age: number;
//   zipCode: number;
// };

// Partialの後にジェネリクスの型引数としてProfileを記述することによって
// Profileの中身が自動的にオプショナルな型になる
// 追加しても適用される メンテナンス性が良いこれがpartial型
// type PartialType = Partial<Profile>;

// required型・・・必須に切り替える
// Profileを全て必須の型にしたいが、元の型壊したくない場合
type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// Partialと同様にRequiredを記述すると全て必須となる
type RequiredType = Required<Profile>;
