// 純粋関数
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));

// 高階関数
function map(array: number[], fn: (value: number) => number): number[] {
  return array.map(fn);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = map(numbers, (x) => x * 2);

console.log(doubled);

// 関数の合成
function compose<T>(...functions: ((arg: T) => T)[]): (arg: T) => T {
  return (arg: T): T => functions.reduceRight((acc, fn) => fn(acc), arg);
}

const addOne = (x: number) => x + 1;
const double = (x: number) => x * 2;

const addOneThenDouble = compose(double, addOne);

console.log(addOneThenDouble(2)); 