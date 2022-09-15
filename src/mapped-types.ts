export {};

// Mapped Types・・・in keyof
// 既存の型を流用して新しい方を作るのがMapped Types

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
// Partialは以下のように演算されてオプショナルになっているs
/**
 * Make all properties in T optional
 */
//  type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

// keyofは指定したオブジェクトのプロパティを文字列リテラル型、UNION型として取り出せる
// 上記の演算のinはT（Profile）を一個ずつ取り出せる
// 取り出したものをPに格納している
type PropertyTypes = keyof Profile;
