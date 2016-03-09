/*
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/

function sumFibs(num) {
  if (num < 1)
    return 0;
  
  var fib = [1,1];
  for(i = 1; fib[fib.length-1]+fib[fib.length-2] <= num; i++)
    {
      fib.push(fib[fib.length-1]+fib[fib.length-2]);
    }
  
  return fib.reduce(function(sum,cur){
    return cur % 2 === 0 ? sum : sum + cur;});
}

sumFibs(1000);
