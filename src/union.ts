export {};

// union型（共用型）
// 文字列型と数値型の両方の格納をしたい 兼務
// 兼務したい型をの間にパイプラインを記述
// 意味は〇〇または〇〇
let value: number | string = 1;
value = 'foo';
