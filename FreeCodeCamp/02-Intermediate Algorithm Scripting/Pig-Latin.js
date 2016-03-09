/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/

function translate(str) {
 var vowelStart = /^[aeiou]+/;
 if(str.match(vowelStart))
   return str+= "way";
 var consStart = /^([^aeiou]+)(.*)$/;
 var consApplied = consStart.exec(str);
 return consApplied[2]+consApplied[1]+"ay";
}

translate("bod");
