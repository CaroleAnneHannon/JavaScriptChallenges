/*
Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/

function drawer(price, cash, cid) {
    var change = [];
    var due = cash - price;
    var cashLookup = {"ONE HUNDRED":100,"FIFTY":50,"TWENTY":20.00, "TEN":10, "FIVE":5, "ONE":1, "QUARTER":0.25, "DIME":0.10, "NICKEL":0.05, "PENNY":0.01};
    var cashInTill = 0;
    
    for (var i = cid.length-1; i >= 0; i--)
    {
        //if we have none of this coin/bill in the till, just move on to the next one
        if(cid[i][1] === 0)
            continue;
            
        //total cash in till
        cashInTill += cid[i][1];
            
        //what monetary value is the coin/bill?
        var cashValue = cashLookup[cid[i][0]];
                
        //first we check if the coin/bill can even be used for change (100 can't be used to do change on 0.96 for example)
        if(cashValue <= due)
        {            
            //if the amount of coins/bills is greater than what we need (ex: I have 10 quarters but only need 2 )
            if(cid[i][1]/cashValue > due / cashValue)
                {
                    var moneyApplied = Math.floor(due / cashValue) * cashValue;
                    change.push([cid[i][0],moneyApplied]);
                    due = Math.round((due - moneyApplied)*100)/100;
                    cashInTill = Math.round((cashInTill - moneyApplied)*100)/100;
                }
            else
            {
                    change.push([cid[i][0],cid[i][1]]);
                    due = Math.round((due - cid[i][1])*100)/100;
                    cashInTill = Math.round((cashInTill - cid[i][1])*100)/100;
            }
            
        }
    }
    
    
    // Here is your change, ma'am.
    if(due === 0)
    {
        if(cashInTill === 0)
            return "Closed";
        return change;
    }
    else
        return "Insufficient Funds";
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

//console.log(drawer(19.50, 20.01, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])) ; //should return an array.
//console.log(drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) ; //should return a string.
//console.log(drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) ; //should return a string.
//console.log(drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])) ; //should return [["QUARTER", 0.50]].

//console.log(drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])) ; 
//should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].

//console.log(drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) ; //should return "Insufficient Funds".
//console.log(drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) ; //should return "Insufficient Funds".

console.log(drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) ; //should return "Closed".
