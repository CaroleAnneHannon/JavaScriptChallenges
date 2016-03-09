/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pair(str) {
  //because this is a small finite group, using an object is still performant
  var DNAPairs = {A:"T",T:"A",C:"G", G:"C"};
  var DNAPaired = [];
  var providedArray = str.split('');
  for(i = 0; i < providedArray.length;i++)
    DNAPaired.push([providedArray[i],DNAPairs[providedArray[i]]]);
 return DNAPaired;
}

pair("GCG");
