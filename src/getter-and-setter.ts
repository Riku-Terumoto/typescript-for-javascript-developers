export {};

// 参照や更新等、細かい単位でアクセスを制御するためのメソッドgetter,setterと呼ぶ

// 要件
//  ＊owner
//    ＊所有者 OK
//    ＊初期化時に設定できる OK
//    ＊途中で変更できない OK
//    ＊参照できる OK

//  ＊secretNumber
//    ＊個人番号 OK
//    ＊初期化時に設定できる OK
//    ＊途中で変更できるもの OK
//    ＊参照できない OK

class MyNumberCard {
  // 途中で変更できないようにする為にプライベート
  private _owner: string;
  private _secretNumber: number;
  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // _ownerはプライベートだけど参照できるようにする為、メソッドにgetを付ける（getter）
  // 参照のみできるので、代入はできない
  get owner() {
    return this._owner;
  }

  // 変更できるようにするので引数を受け取り、更新する（setter）
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  // secretNumberは参照できないので、値が更新されているか確認ができない
  // メソッド経由で更新されているか確認する（プライベートは直接アクセスしなければ使える）
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はむさん', 1234567890);
//読み取り専用プロパティであるため、'owner' に代入することはできません。とエラーがでた
// プライベートのgetterなので代入できない
// card.owner = 'Ham';
console.log(card.owner);

// プライベートなので参照できない
// card._secretNumber;

// どんな値が入っているかまず、確認する
console.log(card.debugPrint());
// 個人番号が変更できるかどうか確認する
card.secretNumber = 111111111;
console.log(card.debugPrint());

// 更新はできても参照はできないようになっている
console.log(card.secretNumber);
