export {};

// インターフェース・リターンズ
// TypeScriptでは一つしか継承ができない
// 複数のinterfaceを継承することはできる（事実上、継承ではなく、実装）
// 今までのinterfaceはオブジェクトの型を定義するものだったが、別機能もある

class Mahotsukai {}
class Souryo {}

// これはできない
// class Taro extends Mahotsukai, Souryo {}
class Taro extends Mahotsukai {}

// シグネチャ (抽象メソッドのようなもの)
interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

// 複数のintefaceを実装している implements
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('iozanun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
