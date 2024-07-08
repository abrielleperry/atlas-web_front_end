const { is } = require("@babel/types");

function countPrimeNumbers() {
  let count = 0;
  for (let i = 2; i < 100; i++) { // starts at 2 loop through 100 to check if prime 
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

function isPrime(num) {

}
