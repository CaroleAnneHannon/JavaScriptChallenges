/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  //although the tests don't test for it, this is me handling what if there are upper case letters or what if the letters are out of order
  str = str.toLowerCase();
  var min=str.charCodeAt(0), max=str.charCodeAt(0);
  for(i = 1; i < str.length; i++)
    {
      var charint = str.charCodeAt(i);
      if( charint > max)
        max = charint;
      if(charint < min)
        min = charint;
    }
  
  //and now for the actual code
  var compareString = "";
  for(var i = min; i <= max; i++)
    compareString += String.fromCharCode(i);
  var result = compareString.replace(new RegExp("["+str+"]","gi"),"");
  return result === ""? undefined : result;
}

fearNotLetter("bcd");
