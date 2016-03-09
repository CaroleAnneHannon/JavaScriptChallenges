/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  //return str.replace(/[\W_]/g,"-").replace(/([A-Z])/g,"-\$1").replace(/-+/g,"-").replace(/^-/,"").toLowerCase();
  
  return str.replace(/(?:([a-z])([A-Z])|([A-z])[\W_]+([A-z]))/g,"\$1\$3-\$2\$4").toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase('thisIsSpinalTap');
