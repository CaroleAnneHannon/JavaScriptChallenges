/*Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true || bool === false)
    return true;
  return false;
}

boo("1");
