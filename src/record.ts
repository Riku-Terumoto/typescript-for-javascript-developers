export {};

// Utility Typesの一つ
// Record型
// Record<K, T>・・・二つの型引数を受け取る
// KはUNION型の受け取る、Tは繰り返したもの

// type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori';
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

// それぞれの値に再起的にある共通のものを持たせたい時にRecord型は便利

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

// 共通のデータを持っている
// 誤った値を入れても型をアノテーションしていないのでエラーが検出されない
// 普通に型をアノテーションするとこうなる ただ同じことをしているので無駄
// const covid19Japan: {
//   Tokyo: Covid19InfectionInfo;
//   Chibe: Covid19InfectionInfo;
//   Tottori: Covid19InfectionInfo;
//   Shiga: Covid19InfectionInfo;
// } = {
//   Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
//   Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
//   Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
//   Shiga: { kanji_name: '滋賀', confirmed_cases: true },
// };

// Recordで一気に型アノテーションすることができる
// ShigaはPrefecturesの中に入っていないのでエラーになる
// 追加すると次はbooleanの部分がエラーになる
const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
  // Shiga: { kanji_name: '滋賀', confirmed_cases: true },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 13 },
};
