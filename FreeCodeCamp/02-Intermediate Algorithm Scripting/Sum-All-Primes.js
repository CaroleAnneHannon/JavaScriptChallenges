/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.
*/

function isPrime(num)
{
  for(var i = 2; i < Math.floor(num+1)/2; i++)
    if(num%i === 0)
      return false;
  return true;
}

function sumPrimes(num) {
  var primes = [];
  for (var i = 2; i <= num; i++)
    {
      if(isPrime(i))
        primes.push(i);
    }
  return primes.reduce(function(sum,cur){return sum+=cur;});
}

console.log(sumPrimes(5));
