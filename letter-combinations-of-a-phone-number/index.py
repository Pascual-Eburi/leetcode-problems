class Solution:
    def letterCombinations(self, digits):
        if not digits:
            return []

        digit_to_letters = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }

        result = ['']

        for digit in digits:
            new_combinations = []
            for combination in result:
                for letter in digit_to_letters[digit]:
                    new_combinations.append(combination + letter)
            result = new_combinations

        return result