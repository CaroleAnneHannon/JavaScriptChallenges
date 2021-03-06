/*Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

//solution 1
function binaryAgent(str) {
  var binaryArray = str.split(' ');
  var convertedArray = [];
  for(var i = 0; i < binaryArray.length; i++)
    convertedArray.push(String.fromCharCode(parseInt(binaryArray[i],2)));
  return convertedArray.join('');
}

/*solution 2
function binaryAgent(str) {
	//helper function
    function parse(val)    {
		return String.fromCharCode(parseInt(val,2));    }
	//gets each set of digits (plus optional space) and puts them through parse
  return str.replace(/\d+\s?/g,parse);
}
*/

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
