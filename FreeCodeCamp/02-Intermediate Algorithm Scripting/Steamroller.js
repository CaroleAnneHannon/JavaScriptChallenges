/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamroller(arr) {
  // I'm a steamroller, baby
  var flat = [];
  console.log("steamroller");
  for(var i = 0; i < arr.length; i++)
    {
      console.log(arr[i]);
      if(!Array.isArray(arr[i]))
        {
        console.log("push");
        flat.push (arr[i]);
        }
      else
        {
          console.log("concat");
         flat = flat.concat(steamroller(arr[i]));
        }
    }
  return flat;
}


steamroller([[["a"]], [["b"]]]);
