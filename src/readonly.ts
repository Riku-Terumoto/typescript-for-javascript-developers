export {};

// readonly修飾子 読み取り専用
class VisaCard {
  // メンバー変数の前に記述する
  // readonly owner: string;
  // constructor(owner: string) {
  //   this.owner = owner;
  // }

  // 省略版でもreadonlyできる 定番の修飾子の後に記述
  // readonlyは読み取り専用なのでアクセスできる publicがついていても意味は同じ 他の修飾子は違う
  // 他の人もわかるようになるべく付ける
  constructor(public readonly owner: string) {
    // this.owner = owner;
  }
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);
// 読み取り専用なので代入できない
// myVisaCard.owner = 'ベーコン';
