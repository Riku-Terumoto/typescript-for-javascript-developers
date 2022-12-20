export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 30);
console.log(taro);

// new演算子を返すような時に使う（ConstructorParameters）
type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;

// 型定義
// type MyConstructorParameters<T extends abstract new (...args: any) => any> =
//   T extends abstract new (...args: infer P) => any ? P : never;

const profile: Profile = ['Ham', 43];

const ham = new Person(...profile);
console.log(ham);
