export {};

// namespace 名前空間
// クラスは同じ名前空間には一つしか定義できない
// フォルダとファイルが例) 同じ名前のファイルは同じフォルダに居れないけど、別のファイルであれば可能 これが名前空間
// ファイルがクラス
// フォルダが名前空間
namespace Japanese {
  // namespaceはネストが可能 その場合はexportをする 外から見えていないため
  export namespace Tokyo {
    // namespace内のクラスにアクセスする際は参照元はexportをして外から見えるようにする
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

// namespace.クラス名でアクセス
const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'joseph', 'Jackson');
console.log(michael);
