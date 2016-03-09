/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
function findLongestWord(str) {
  return str.split(' ').reduce(function(currentHighest,nextValue)
                              {
    if(currentHighest.length > nextValue.length)
      return currentHighest;
    else
      return nextValue;
    
  }).length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
