/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, add(2, 3) should return 5, and add(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = add(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function add() {
	if(!arguments[0] || !Array.prototype.slice.call(arguments).every(function(element)
	{
		return typeof(element) === "number";
	}))
		return undefined;
	
	var arg1 = arguments[0];
	
	if(!arguments[1])
	return function (x)
	{
		if(!Array.prototype.slice.call(arguments).every(function(element)
		{
			return typeof(element) === "number";
		}))
			return undefined;
			
		return arg1 + x;
	};

return arguments[0]+arguments[1];
}

add();
