export {};

// type alias
type ObjectType = {
  name: string;
  age: number;
};

// interface
// タイプエイリアスでは無いのでイコールは不要
// interfaceでもオブジェクト型の名前をつけれる
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectType = {
  name: 'Ham-san',
  age: 43,
};

let object2: ObjectInterface = {
  name: 'Ham-san',
  age: 43,
};
