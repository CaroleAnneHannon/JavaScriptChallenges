/*
Implement a way of converting two dates into a more friendly date range that could be presented to a user.

It must not show any redundant information in the date range.

For example, if the year and month are the same then only the day range should be displayed.

Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be omitted.

Input date is formatted as YYYY-MM-DD
*/

function formatDate(str)
{
  var components = str.match(/(\d{4})-(\d{2})-(\d{2})/);
  var Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var dateStringArray =[];
   dateStringArray.push(", "+components[1]);
   dateStringArray.push(Months[components[2]-1]+" ");
   components[3] = Number(components[3]);
   
  switch(components[3]){
           case 1:
               dateStringArray.push("1st");
               break;
           case 2:
               dateStringArray.push("2nd");
               break;
           case 3:
               dateStringArray.push("3rd");
               break;
           default: dateStringArray.push( components[3]+"th");
       }
   dateStringArray.push(Number(components[1]));
   dateStringArray.push(Number(components[2]));
  return dateStringArray;
  
}

function friendly(str) {
    var dates = [];
  var FirstDate = formatDate(str[0]);
  if (str[0] === str[1])
  {
    dates.push(FirstDate[1]+FirstDate[2]+FirstDate[0]);
    return dates;
  }
  var SecondDate = formatDate(str[1]);
  console.log(FirstDate[3] +" "+ SecondDate[3]+" "+FirstDate[4] +" "+ SecondDate[4])    ;
  if(FirstDate[3] === SecondDate[3] || (FirstDate[3] === SecondDate[3]-1 && FirstDate[4] > SecondDate[4]))
  { FirstDate[0] = "";
    SecondDate[0] = "";
    if(FirstDate[1] === SecondDate[1])
    {
        SecondDate[1] = "";
    }
  }
    dates.push(FirstDate[1]+FirstDate[2]+FirstDate[0]);
    dates.push(SecondDate[1]+SecondDate[2]+SecondDate[0]);
    return dates;
}

friendly(["2015-07-01", "2015-07-04"]);
friendly(["2015-12-01", "2016-02-03"]);
friendly(["2015-12-01", "2016-02-03"]);