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
const count = countPrimeNumbers(); // calls function stores val in count
const end = performance.now(); // time after func call has ended

console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds`);
