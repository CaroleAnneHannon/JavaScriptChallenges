/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
*/

function where(collection, source) {
  var searchKeys = Object.keys(source);
  
  var arr = [];
    
  arr = collection.filter(function(element)
                         {
    for(i = 0 ; i < searchKeys.length; i++)
    {
      if(!element.hasOwnProperty(searchKeys[i]) || element[searchKeys[i]] !== source[searchKeys[i]])
        return false;
    }
      return true;
  });
  return arr;
}

where([{ "x": 1, "z": 2 }, { "x": 1 }, { "x": 1, "z": 2, "c": 2 }], { "x": 1, "z": 2 });
