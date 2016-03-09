/*
Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.
*/
function bouncer(arr) {
  return arr.filter(function(val){
    return(Boolean(val));});
}

bouncer([1,false, null, 0, NaN, undefined, ""]);
