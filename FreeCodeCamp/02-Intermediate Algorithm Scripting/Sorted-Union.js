/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function unite() {
  //puts all arrays into one array
  var arg = Array.prototype.slice.call(arguments, 0);
  var arr = [];
  for (var i = 0; i < arg.length; i++)
    arr = arr.concat(arg[i]);
  
  //filter
  return arr.filter(
    //if the first occurence is the index we are looking at, use it, otherwise filter
    function(val, index, array){
    return array.indexOf(val) === index;
  });
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
