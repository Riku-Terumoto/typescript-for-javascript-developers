export {};

// object型
// オブジェクトの中身まで見ないので制約が甘い
let profile1: object = { name: 'Ham' };
profile1 = { brithYear: 1976 };

// let profile2: {} = { name: 'Ham' };
// profile2 = { brithYear: 1976 };

// 型推論で出たようにプロパティにも制約ができる
let profile2: {
  name: string;
} = { name: 'Ham' };

// 宣言されていないプロパティは代入できない
// profile2 = { brithYear: 1976 };

// 同じプロパティしか更新できない
profile2 = { name: 'Nimo' };
