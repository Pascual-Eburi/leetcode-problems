from typing import List

"""
* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 -------- SOLUCION ---------
Runtime: 1373 ms, faster than 49.03% of Python3 online submissions for 3Sum.
Memory Usage: 18.1 MB, less than 72.13% of Python3 online submissions for 3Sum.
"""
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        #pairs
        pairs = [];
        #short the array
        nums.sort()
        #loop throught the numbers
        for i,v in enumerate(nums):
            if(i > 0 and v == nums[i - 1]):
                continue
            #left and right pointers
            lp, rp = i + 1, len(nums) - 1;

            #compute the sum
            while lp < rp:
                pairSum = v + nums[lp] + nums[rp];
                if pairSum > 0:
                    rp-=1
                elif pairSum < 0:
                    lp += 1
                else:
                    pairs.append([v, nums[lp], nums[rp]])
                    #update the left pointer
                    lp +=1
                    while nums[lp] == nums[lp - 1] and lp < rp :
                        lp+=1
        return pairs
            

