export {};

// static 静的メンバ
// クラスを作り、インスタンス化してそれぞれのメンバにアクセスしていたがその値は変更可能だった
// その今まで通りのやり方を動的メンバと呼ぶ
// それに対して、常に変化しないメンバを持たせたいというニーズのクラス設計があったりする
// 常に変化しないのでインスタンスしなくてもアクセスできるようにしたものを静的メンバと呼ぶ

class Me {
  // コンストラクタなしの初期化。ハードコーディングと呼ぶ
  // 値の変化がしないメンバにであるが、このままだとインスタンス化しないとアクセスができない
  static isProgrammer: boolean = true;
  static firstName: string = 'Riku';
  static lastName: string = 'Terumoto';

  // メソッドもstatic可能
  // クラス外でアクセスするようにメンバ変数を使うことができる Me.firstName
  // ただ、Meだとクラスに依存してしまうので、抽象的にthis.firstNameとしたほうが良い
  static work() {
    // "Hey, guis! This is Riku ! Are you interested in TypeScript? let's dive into TypeScript!";
    return `Hey, guis! This is ${this.firstName} Are you interested in TypeScript? let's dive into TypeScript!`;
  }
}

// インスタンスないと参照できない
// let me = new Me();
// console.log(me.isProgrammer);

// クラスに直接アクセスする(staticの場合)
console.log(Me.isProgrammer);
console.log(Me.work());
