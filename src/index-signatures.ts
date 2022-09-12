export {};

// インデックスシグネチャ
// 動的に様々なプロパティを設定していくことを想定する
// let profile: { name?: string } = {};
// 以下のように記載するおかげでわざわざ必要なプロパティを型に設定せずに、汎用的に型が使える
// let profile: { [index: string]: string | number } = {};

// 型をinterfaceにまとめた形
interface Profile {
  // 初期化時に最初の値が必要
  name: string;
  // 20歳未満はtrue、20歳以上はfalseと設定したので、初期化時に最初の値が必要
  underTwenty: boolean;
  // こちらは後から設定されるプロパティ、値の汎用的な型
  [index: string]: string | number | boolean;
}

// 初期化
let profile: Profile = { name: 'Ham', underTwenty: false };

// 設定したいプロパティがオブジェクトの型に存在しないとエラーになってしまう
// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';
