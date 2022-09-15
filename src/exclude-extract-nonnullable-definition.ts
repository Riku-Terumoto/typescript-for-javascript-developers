export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTyps = NonNullable<NullableTypes>;
