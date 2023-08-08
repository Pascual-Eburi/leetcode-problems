<?php
class Solution {

    /**
     * @param int[] $nums
     * @return Integer
     */
    function threeSum($nums) {
       $pairs = [];
       
       // sort the array
       sort($nums);
       // the loop
        for($i = 0; $i < count($nums); $i++){
            #check if the current element == previous
            if($i > 0 && $nums[$i] == $nums[$i - 1]){ continue;}
            
            // lef and right pointers
            $lp = $i + 1; $rp = count($nums) - 1;

            #compute the sum
           
            while( $lp < $rp ){
                $sum = $nums[$i] + $nums[$lp] + $nums[$rp];
                if($sum > 0){ $rp--;
                }elseif ($sum < 0) {
                    # increment left pointer
                    $lp++;
                }else{
                    array_push($pairs, [$nums[$i], $nums[$lp], $nums[$rp]]);
                    #update the left pointer
                    $lp++;
                    while($nums[$lp] == $nums[$lp - 1] && $lp < $rp){
                        $lp++;
                    }
                }
            }
        }
        return $pairs;
    }
}
?>