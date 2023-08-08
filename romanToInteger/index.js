function romanToInteger(s){
    //const romans = { M: 1000 , D:500, C: 100,L: 50,X:10, V:5, I:1};
    const romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    const equivalences = [1, 5, 10, 50, 100, 500, 1000];
    let integer = 0;
    let current; let prev; let next;
    for(let i in s){
        current = s[i]; next = s[parseInt(i) + 1];prev = s[parseInt(i) - 1];
        let prevValue = parseInt(equivalences[romans.indexOf(prev)]);
        let curretValue = parseInt(equivalences[romans.indexOf(current)]);
        let nextValue = parseInt(equivalences[romans.indexOf(next)]);
        if(!nextValue && !prevValue){
            integer = curretValue;
        }else if(nextValue){
           integer = (curretValue >= nextValue) ? curretValue + integer: integer - curretValue;
           
        }else{
            integer = (prevValue >= curretValue) ? curretValue + integer: integer + curretValue;
        }

    }
    return integer;
}

console.log(romanToInteger('MCMXCIV'))
/**
 * Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */