/*
function find(arr, func) {
  var num = 0;
  return arr.filter(func)[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });

*/

function GCD(arr)
{
  while (arr[0] != arr[1])
    {
      if(arr[0] > arr[1])
        arr[0] = arr[0]-arr[1];
      else
        arr[1] = arr[1]-arr[0];
    }
  return arr[0];
}

function LCM(arr)
{
  return arr[0] * arr[1] /GCD(arr);
}


function smallestCommons(arr) {
  if (arr.length < 2)
    return arr[0];
  
  var range = [];
  for(i = Math.max(arr[0],arr[1]); i >= Math.min(arr[0],arr[1]) && i > 1; i--)
    range.push(i);
  
  //first 2
  var lcm = LCM([range[0],range[1]]);
  //others
  for (i = 2; i < range.length; i++)
    {
      lcm = LCM([lcm,range[i]]);
    }
  
  return lcm;
}



LCM([1,5]);
