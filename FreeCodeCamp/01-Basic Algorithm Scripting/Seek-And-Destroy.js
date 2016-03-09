/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/
function removeFromArray(arr, val)
{
  return arr.filter(function(value){
    return value !== val;});
}

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.shift();
  
  
  while(args.length > 0)
  {
    arr = removeFromArray(arr,args[0]);
    args.shift();
  }
             
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
