function largestFactor(num) {
  var primes = [];
  var prime_init = 2;

  while (num > 1) {
    // check mod(2) division of input
    var check = num % prime_init;

    // looping through all primes, storing in an Array
    while (check == 0) {
      primes.push(prime_init);
      num /= prime_init;
      check = num % prime_init;
    }

    // iterating on the prime factor
    prime_init++;
  }

  // printing back to the console the array of primes
  var hasil = Math.max.apply(Math,primes)
  return hasil;
}

module.exports = largestFactor;
