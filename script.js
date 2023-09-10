// function generateFibonacci(n) {
//     const fibonacciSequence = [];

//     if (n >= 1){
//         fibonacciSequence.push(0);
//     }
//     if (n >= 2){
//         fibonacciSequence(1);
//     }
//     for (let i = 2; i < n; i++) {
//         const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
//         fibonacciSequence.push(nextFibonacci);
//     }
//     return fibonacciSequence;
// }
// const fibonacciNumbers = generateFibonacci(10);
// console.log(fibonacciNumbers);

function fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const prevSequence = fibonacci(n - 1);
      const lastTwo = [prevSequence[prevSequence.length - 2], prevSequence[prevSequence.length - 1]];
      const nextFibonacci = lastTwo[0] + lastTwo[1];
      prevSequence.push(nextFibonacci);
      return prevSequence;
    }
  }
  
  // Generate the first 10 Fibonacci numbers
  const fibonacciNumbers = fibonacci(10);
  console.log(fibonacciNumbers);  