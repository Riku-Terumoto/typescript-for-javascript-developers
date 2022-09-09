export {};

// 継承
class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    // superメソッドは親クラスの同名のメソッドのこと
    // superメソッドは親クラスのコンストラクタそのものなので引数が必要
    // TypeScriptの言語仕様で親が先に初期化されて、その次に子が初期化される
    // nameは親クラスのコンストラクタと同様のsuperで初期化されるのでLionでの初期化はいらない
    super(name);
    this.speed = speed;
  }
  run(): string {
    // TypeScriptの言語仕様でsuper.親メソッドとすることで親のメソッドを呼び出せる
    // なのでI can runという文字列を返す
    // const parentMessage = super.run();
    // console.log({ parentMessage });
    return `${super.run()} ${this.speed}km/h`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());
// console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());
