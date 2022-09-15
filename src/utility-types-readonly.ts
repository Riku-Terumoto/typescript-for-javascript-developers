export {};

// Utility型の一つ
// readonly・・・全ての型を読み取り専用にする
type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43,
};

me.age++;
console.log(me);

// ProfileにReaconly付与すると全てが読み取り専用になる
type PersonalDataType = Readonly<Profile>;

// readonlyなので更新ができない
const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40,
};

// friend.age++;

// Mapped Typesだとこうなっている
// これがReadonlyで演算されている
// これは自作だが。。。
// type YomitoriSenyo<T> = {
//   readonly [P in keyof T]: T[P];
// };
// type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
