function sumPrimes(num) {
  let arr =[];
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
       return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
    arr.push(i);
  }
  console.log(arr)
  return sum;
}
console.log(sumPrimes(977));