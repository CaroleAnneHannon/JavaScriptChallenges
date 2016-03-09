/*
Check if a string (first argument) ends with the given target string (second argument).
*/
function end(str, target) {
  return str.match(new RegExp(target+'$'),"i") ? true : false;
}

end("Connor", "n");
