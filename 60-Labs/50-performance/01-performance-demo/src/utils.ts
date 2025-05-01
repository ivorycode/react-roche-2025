export function doCalculations(n: number = 5) {
  let result = 0;

  for (let i = 30; i < 30 + n; i++) {
    const start = new Date();
    result += fibonacci(i);
    const end = new Date();
    console.log(
      `Input: ${i} Result: ${result}, Time: ${end.getTime() - start.getTime()}`,
    );
  }
  return result;
}

function fibonacci(n: number): number {
  if (n < 2) return 1;
  else return fibonacci(n - 2) + fibonacci(n - 1);
}
