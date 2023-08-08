<?php
/**
 * Runtime: 1593 ms, faster than 71.11% of PHP online submissions for 3Sum Closest.
    Memory Usage: 19.5 MB, less than 42.22% of PHP online submissions for 3Sum Closest.
 */
class Solution {

    /**
     * @param Int[] $nums
     * @param Int $target
     * @return Integer
     */
    function threeSumClosest($nums, $target) {
        $diff = PHP_INT_MAX; $sum = 0;
        // short the array
        sort($nums);
        for($i= 0; $i < count($nums); $i++){
            if($i > 0 && $nums[$i] == $nums[$i - 1]) continue;
            // left and right pointers
            $lp = $i +1 ; $rp = count($nums) - 1;
            while($lp < $rp){
                $sum = $nums[$i] + $nums[$lp] + $nums[$rp];
                if($sum == $target) return $sum;

                if(abs($sum - $target) < abs($diff)){$diff = $target - $sum;}
                // increment the right and left pointers
                ($sum > $target) ? $rp--: $lp++;
            }
        }
        return $target - $diff;
    }
}

?>