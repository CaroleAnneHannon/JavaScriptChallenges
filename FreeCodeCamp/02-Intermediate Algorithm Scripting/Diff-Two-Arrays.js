/*
Compare two arrays and return a new array with any items only found in one of the original arrays.
*/

function diff(arr1, arr2) {
  //step 1: Add each element of the first array to a hash table
  var hash = {};
  for(i = 0; i < arr1.length; i++)
    {
      hash[arr1[i]] = [true,false,arr1[i]];
    }
  
  //step 2: Add each element of the second array to the hash table
  for(i = 0; i < arr2.length; i++)
    {
      if(!hash.hasOwnProperty(arr2[i]))
        hash[arr2[i]] = [false,true,arr2[i]];
      else
        hash[arr2[i]][1] = true;
    }
  
  //step 3: go through hash properties. If the diff arrays are both true, then it's not a diff. Otherwise add to return array
  var diffArray = [];
  for (var prop in hash) {
    if(!hash[prop][0]||!hash[prop][1])
        diffArray.push(hash[prop][2]);
    
  /*reasoning: if arr1 and arr2 are both length N and using completely different keys (worst case)
  , then first loop = N, second loop = N, hash loop = length 2N. Thus this is O(4N) => O(N)
  using these same settings, the "easy" solution of looping through one array and using indexOf against that loop to check the other array for each element would be O(n^2)
  thus this is a faster solution for large sets*/
}
  
  
  return diffArray;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
