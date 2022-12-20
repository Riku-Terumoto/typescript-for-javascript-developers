export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('陸', 24);

// 他人が作った関数の引数の型を取り出して使えるようにするのがParametersになる
type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 76];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
