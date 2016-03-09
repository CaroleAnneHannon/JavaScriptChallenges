/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters.

For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.
*/

function Permute(characters, out, curString, curLength,used)
{
    //if we've reached the max
    if(curLength === characters.length)
    {
        //push to out, since out is passed by reference it'll keep adding to the same array
        return out.push(curString);
    }
        
    //sets function specific variables
    if(curLength === undefined)
        curLength = 0;
    if(out === undefined)
        out = [];
    if(curString === undefined)
        curString = '';
    if(used === undefined)
        used = characters.map(function(x){return false;});
    
    for(var i = 0; i < characters.length; i++)
    {
        //if we already used the element, stkip
        if(used[i])
            continue;
        //add to the string
        curString += characters[i];
        //set that we used it
        used[i] = true;
        //move on to next index
        Permute(characters, out,curString, ++curLength,used);
        //once back, set it back to what we just had so it can try the next element
        curString = curString.slice(0,-1);
        --curLength;
        used[i] = false;
    }
    //return out, will be unused except for the original one
    return out;
}

function hasNoRepeatedCharacter(str){
    return !/(\w)\1/.test(str);
}

function permAlone(str) {
  return Permute(str.split('')).filter(hasNoRepeatedCharacter).length;
}

permAlone('aab');

