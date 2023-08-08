/**
 * 17. Letter Combinations of a Phone Number
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. 
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 const letterMap = {2: 'abc',3: 'def',4: 'ghi',5: 'jkl',6: 'mno',7: 'pqrs',8: 'tuv',9: 'wxyz'}
 */

function letterCombinations(digits){
    
    if(digits.length <= 0) return [];
        const letterMap = {
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'x', 'y', 'z']
        }
    if(digits.length == 1) {return letterMap[digits];}

    let result = []; let comb = '';
    letterMap[digits[0]].forEach(char => {
        comb = char;
        let j = 0;let end = false;
        while(!end){
            for(let i = 1; i < digits.length; i++){
                if(letterMap[digits[i]][j] == undefined){end= true; break;}
                comb+=letterMap[digits[i]][j];
            }
            j++;
            if(comb!=char)result.push(comb)

        }
    });

    returns result;
}
/**
 * ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi",
 * "bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi",
 * "cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]
 * 
 * ['adg', 'aeh', 'afi', 'bdg', 'beh', 'bfi', 'cdg', 'ceh', 'cfi']
 */
console.log(letterCombinations('234'));
