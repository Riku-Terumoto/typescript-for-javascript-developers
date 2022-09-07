import axios from 'axios';
export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// any型は型がわからない場合(typescriptではあまり好ましくない)
// 配列型の中にobject型が存在するような定義をする（データ通りにする）
// ただオブジェクトの中の型を指定できていない
// interfaceを使ってオブジェクトの中身まで型定義する
// interfaceはオリジナルで型を作れる
axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  // let data: object[];
  let data: Article[];
  data = response.data;
  // data = [
  //   {
  //     id: 1,
  //     title: 'title',
  //     description: 'description',
  //   },
  // ];
  console.log(data);
});
