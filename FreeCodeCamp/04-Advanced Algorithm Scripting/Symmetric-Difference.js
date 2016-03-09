/*
Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.

The mathematical term symmetric difference refers to the elements in two sets that are in either the first or second set, but not in both.
*/

//Helper function that compares one array to another to remove items that are in the second array from the first array
function notInArray (arr1,arr2){
  return arr1.filter(function(x){return arr2.indexOf(x) == -1;});
}

//Helper function that gets unique elements in an array
function uniqueArray (arr){
    return arr.filter(function(x,i,ar){
        return ar.indexOf(x) == i;
    });
}

function sym() {
    //convert arguments to array using slice call;
    //reduce will compare the first two, get its result, and compare that result to the next
    return Array.prototype.slice.call(arguments).reduce(function(prev,cur){
        //gets the unique list of items that are not in both arrays
        return uniqueArray(notInArray(prev,cur).concat(notInArray(cur,prev)));
    });
}


sym([1, 2, 3], [5, 2, 1, 4]);
