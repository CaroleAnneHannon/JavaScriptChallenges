/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convert(num) {
  var romanValues =
     [ [1000,"M"]
      ,[900,"CM"]
      ,[500,"D"]
      ,[400,"CD"]
      ,[100,"C"]
      ,[90,"XC"]
      ,[50,"L"]
      ,[40,"XL"]
      ,[10,"X"]
      ,[9,"IX"]
      ,[5,"V"]
      ,[4,"IV"]
      ,[1,"I"]];
  var converted = "";
  
  for(var i = 0; i < romanValues.length; i++)
    {
      if(num >= romanValues[i][0])
        {
          converted += romanValues[i][1].repeat(num/romanValues[i][0]);
          num -= romanValues[i][0] * Math.floor(num/romanValues[i][0]);
        }
    }
 return converted;
}

convert(29);
