/*
Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument will be a string.

These methods must be the only available means for interacting with the object.
*/

var Person = function(firstAndLast) {
    var _first = "";
    var _last = "";
    
  
    this.getFirstName = function(){ return _first;};
    this.getLastName = function(){return _last;};
    this.getFullName = function(){return _first+" "+_last;};
    this.setFirstName = function(first){ _first = first;};
    this.setLastName = function(last){ _last = last;};
    
    this.setFullName = function(firstAndLast){
        var arr = firstAndLast.split(' ');
        _first = arr[0];
        _last = arr[1];
        
    };
    
    this.setFullName(firstAndLast);
  
};


var bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
console.log(bob instanceof Person);
//bob.getFullName();

