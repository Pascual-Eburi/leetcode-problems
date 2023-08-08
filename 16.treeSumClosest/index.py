from hashlib import new
from numbers import Number
from typing import List

"""
#--------------------------
Runtime: 8733 ms, faster than 26.63% of Python3 online submissions for 3Sum Closest.
Memory Usage: 14.2 MB, less than 57.66% of Python3 online submissions for 3Sum Closest.
#--------------------------------
"""
class Solution:
    def threeSumClosest(self, nums:List[int], target: int) -> int:
        diff =  float('+inf');
        #short the array
        nums.sort()
        for i, a in enumerate(nums):
            if i>0 and a == nums[i - 1]:
                continue
            lp,rp = i + 1, len(nums) - 1
            while lp < rp:
                sum = a + nums[lp] + nums[rp]
                #print(sum)
                if sum == target:
                    return sum
                if abs(sum - target) < abs(diff):
                    diff = target - sum
                if sum > target : 
                    rp-=1
                else: 
                    lp+=1
        return target - diff
l = [-1,2,1,-4]
t = 1
sol = Solution()
print(sol.threeSumClosest(l,t))
