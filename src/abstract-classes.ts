export {};

// 抽象メソッドはこんな名前のメソッドがありますよ〜というのがそう
// 抽象メソッドは必ずオーバライドする必要がある
// ⇨抽象メソッドの宣言をシグネチャと呼ぶ
// 抽象メソッドは抽象クラス内でのみ使用できる
// メソッド名の後にabstractをつける
// 抽象的にクラスとメソッドを作ってそれを継承して実装するテンプレートみたいなもの

// 抽象クラス
// classの前にabstractをつける

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry(): string {
    return 'roar';
  }
}

// 抽象メソッドがあると継承した子クラスで実装し忘れてもコンパイルエラーで教えてくれる
class Tiger extends Animal {
  cry(): string {
    return 'grrrr';
  }
}
