export {};

// constアサーション
let name = 'Riku';

name = 'Teru';

// constアサーションをすると値がそのまま型になる
let nickname = 'Ham' as const;

// Ham型なので再代入できない
// nickname = 'Hamtaro';

// constアサーション（オブジェクト）
// nameとheightが読み取り専用（readonly）となる
// オブジェクトの値を変えたくない場合に便利
let porfile = {
  name: 'Atsushi',
  height: 178,
} as const;

// 以下のように再代入を許したくない場合
// porfile.name = 'Ham';
// porfile.height = 180;
