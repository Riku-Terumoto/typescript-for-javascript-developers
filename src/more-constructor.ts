export {};

class Person {
  // public name: string;
  // protected age: number;

  // 初期化時に引数にアクセス修飾子を付けることで省略できる
  constructor(public name: string, protected age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person('はむさん', 43);
console.log(me);
