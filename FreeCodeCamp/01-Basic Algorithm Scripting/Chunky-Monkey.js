/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
*/
function chunk(arr, size) {
  var ret = [];
  while(arr.length > 0)
    ret.push(arr.splice(0,size));
  return ret;
}

chunk(["a", "b", "c", "d","e","f"], 2);
