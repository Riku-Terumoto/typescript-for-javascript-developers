export {};

// extendsは互換性を評価している
type MyExclude =
  | never // (string extends string | number ? never : string)
  | never // (number extends string | number ? never : number)
  | DebugType; // DebugType extends string | number ? never : DebugType);

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;

type MyFunctionType = MyExclude;

type FunctionTypeExtract = Extract<SomeTypes, DebugType>;
type NullableTypes = string | number | null | undefined;
type NonNullableTyps = NonNullable<NullableTypes>;
