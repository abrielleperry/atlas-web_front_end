function countPrimeNumbers() {
  let count = 0;
  for (let i = 2; i < 100; i++) { // starts at 2 loop through 100 
    if (isPrime(i)) { // is number prime
      count++; // if yes increment count
    }
  }
  return count;
}

function isPrime(num) { // is given number prime
  for (let i = 2; i < num; i++) {
    if (num % i === 0) { // if num div by i wo remainder
      return false; // not prime
    }
  }
  return true; // prime

}

const start = performance.now(); // start time
for (let i = 0; i < 100; i++) { // loop 100 times
  countPrimeNumbers();
}
const end = performance.now(); // time after func call has ended

console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds`);
