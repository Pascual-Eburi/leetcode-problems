
/**
 * Runtime
Details
47ms
Beats 87.16%of users with JavaScript
Memory
Details
41.00mb
Beats 99.18%of users with JavaScript
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // If the input is empty, return an empty array.
    if (digits.length === 0) {
      return [];
    }
  
    // Map each digit to its corresponding letters on a phone keypad.
    const digitToLetters = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz'
    };
  
    // Initialize an array to store the resulting combinations.
    const result = [];
  
    // Define a backtracking function to generate combinations.
    const backtrack = (currentCombination, index) => {
      // If we have reached the end of the input digits, add the combination to the result.
      if (index === digits.length) {
        result.push(currentCombination);
        return;
      }
  
      // Get the letters corresponding to the current digit.
      const letters = digitToLetters[digits[index]];
  
      // Iterate through each letter and recursively generate combinations.
      for (let letter of letters) {
        backtrack(currentCombination + letter, index + 1);
      }
    };
  
    // Start the backtracking process with an empty combination and index 0.
    backtrack('', 0);
  
    // Return the array containing all possible letter combinations.
    return result;
  };
  