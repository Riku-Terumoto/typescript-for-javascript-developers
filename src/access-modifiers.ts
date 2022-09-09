export {};

// アクセス修飾子
class Person {
  // メンバー変数宣言している部分にアクセス修飾子を追加できる（PHPのような）
  // クラス外からアクセスできる（パブリックを書いても書かなくても同じ）
  public name: string;
  // クラス外からアクセスできない（クラスインスタンスからの呼び出しができなくなった）
  // private age: number;
  protected age: number;

  // コンストラクタで初期化しないとエラーがでる
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

// Personクラスを継承した子クラス
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // superメソッドを使うだけで親クラスのコンストラクタを呼べる
    // 親クラスの初期化が実行される
    super(name, age, nationality);
  }

  // ageはプライベートなので、Personクラスでしか使えない
  // プロテクティッドは継承した子クラスで使える
  profile(): string {
    return `name: ${this.name}, age: ${this.age},natinality:${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'japan');
// console.log(taro);
// プライベートメンバに直接アクセスしていないのでageが出力されている
console.log(taro.profile());

// name,ageメンバーはグローバルだからアクセス可能
console.log(taro.name);
// console.log(taro.age);
// let hanako = new Person();
