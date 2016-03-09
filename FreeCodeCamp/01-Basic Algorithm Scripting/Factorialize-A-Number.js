/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

/* 
//Solution 1 
function factorialize(num) {
  if(num > 0)
  return num * factorialize(num-1);
  else return 1;
}

factorialize(5);
*/

//Solution 2
function factorialize(num) {
  return num > 0 ? num * factorialize(num-1) : 1;
}

factorialize(5);
