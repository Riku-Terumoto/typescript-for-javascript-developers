export {};

// type alias タイプエイリアス（別名という意味）
// 以下だとstringの別名がMojiretsuとなった 以降はMojiretsuでstringとなる
// タイプエイリアスの名前はパスカルケース
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43,
};

// オブジェクトのプロパティの型を宣言する際は型推論をそのままペーストしていたが、
// 名前をつけて型の宣言をすることができる
type Profile = {
  name: string;
  age: number;
};

const example2: {
  name: string;
  age: number;
} = {
  name: 'Ham',
  age: 43,
};

const example3: Profile = {
  name: 'Ham',
  age: 43,
};

// typeofは指定したオブジェクトの型を調べてProfile2に設定することができる
// もし、example1の型が変わると追従して更新される
type Profile2 = typeof example1;
