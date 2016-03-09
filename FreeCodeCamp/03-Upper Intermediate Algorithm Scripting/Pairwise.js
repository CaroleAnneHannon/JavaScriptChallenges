/*
Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'. If multiple sums are possible, return the smallest sum. Once an element has been used, it cannot be reused to pair with another.

For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and 5 can be paired with each other to equal 7.

pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to equal 4, and the first element has an index of 0!
*/

function pairwise(arr, arg) {
    //adding a buffer to be the first element for reduce to use as sum
    arr.unshift(0);
    //reduce
    return arr.reduce(function(sum,cur,index,arr){
        //if we changed this to null, return the current sum
        if(cur === null)
            return sum;
        //finds the first occurrence of the other number, starting after this index
        var f = arr.indexOf(arg-cur,index+1);
        //sets it to null so we can't match it against another index with the same number
        arr[f] = null;
        //returns the current sum if no match found, otherwise return the indexes 
        //(-1 to adjust for the buffer element added at the beginning of the function)
      return f == -1? sum : sum + f-1 + index-1;
  });
}

pairwise([1,4,2,3,0,5], 7);
