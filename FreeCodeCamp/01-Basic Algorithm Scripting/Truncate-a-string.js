/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

If the num is less than or equal to 3, then the length of the three dots is not added to the string length.
*/
function truncate(str, num) {
  return str.length > num? (str.slice(0,num-(num<4 ? 0 : 3)) + "...") : str;
}

truncate("A-", 11);
