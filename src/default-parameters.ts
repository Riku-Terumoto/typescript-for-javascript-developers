export {};

// デフォルトパラメータ デフォルト引数
// 値が渡されない場合、もしくは、undefinedが渡される場
// イコールでデフォルト値を記述
const netxYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(netxYearSalary(1000));
