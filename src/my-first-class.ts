export {};

// クラス名はパスカルケース
class Peson {
  // メンバ変数宣言and型宣言
  public name: string;
  public age: number;
  // インスタンスを作るときに自動的に呼び出されるもの
  // インスタンス生成時に引数を渡す
  // 引数にも型宣言
  // 言語使用によりconstructorは戻り値がないので型宣言無し 暗黙のルール
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name:${this.name},age:${this.age}`;
  }
}

let taro = new Peson('Taro', 30);
console.log(taro);
// let hanako = new Peson();
