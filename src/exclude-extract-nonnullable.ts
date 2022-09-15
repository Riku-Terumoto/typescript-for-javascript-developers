export {};

// Utiltty Typesの一つ
// Exclude と Extract と NunNullableについて
type DebugType = () => void;

// このいくつかの型から除外したい場合Exlude
type SomeTypes = string | number | DebugType;

// Excludeの型引数に指定する
// 第一引数は全体のUNION型、第二引数に除外したい型を指定
// 残ったDebugTypeがFunctionTypeに代入される
type FunctionType = Exclude<SomeTypes, string | number>;

// 関数の型だけを除外(2種類)
type NumFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// Extract・・・抽出する
// 取り出したい型を第二引数に指定
// 関数を取り出したい
type FunctionTypeExtract = Extract<SomeTypes, DebugType>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;
// 関数以外を取り出したい
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;

// NunNullable・・・UNION型からnullやundefinedを排除してくれる
type NullableTypes = string | number | null | undefined;

// nullとundefinedを排除
type NonNullableTyps = NonNullable<NullableTypes>;
