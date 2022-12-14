export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// 指定したキーを取り出す
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

// 指定したキーを取り除く
type SmalllProfile = Omit<DetailedProfile, 'height'>;

type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;
