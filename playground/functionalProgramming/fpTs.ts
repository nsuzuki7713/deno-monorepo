import { option as O } from "npm:fp-ts@2.16.5";

// 数値を安全に加算する純粋関数
const add = (a: number, b: O.Option<number>): O.Option<number> => {
  return O.fold<number, O.Option<number>>(
    () => O.none,
    (bValue: number) => O.some(a + bValue)
  )(b);
};

// テスト
const result1 = add(2, O.some(3));
const result2 = add(2, O.none);

console.log(result1); // some(5)
console.log(result2); // none