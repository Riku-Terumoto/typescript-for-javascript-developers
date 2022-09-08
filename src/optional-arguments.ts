export {};

// オプショナルなパラメータを定義する
// オプショナル引数・・・引数として存在有無でもどっちでもいい
// 第三引数をオプショナル引数にしたい(?をつける)

// 要件
// bmi(身長、体重、console.logで出力するかどうか？)
//出力される
// bmi(1.78,86,true)
// 出力されない
// bmi(1.78,86,false)
// 出力されない
// bmi(1.78,86)

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

// 本来、実引数は型宣言した三つがないといけないがオプショナルは含まない
bmi(1.78, 86, true);
