/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

------ no usado:

    let first = 0; let second = 0; let third = 0; let pairs = []
    let stop = (nums.length%2 == 0) ? nums.length/2 : Math.round(nums.length/2) ;
    /*for(let i= 0; i < nums.length; i++){
        let end = false; let k = 0;let j = i; let index = 0;
        //console.log(j)
        while(!end){
            if(index >= nums.length ){ end = true;}
            first = nums[j];
            if(first === undefined){break }
            second = (j+1 >= nums.length) ? nums[j+1 - nums.length]: nums[j+1];
            third = (j+2 >= nums.length) ? nums[j+2 - nums.length]: nums[j+2];
            console.log([first, second, third])
            if(first + second + third === 0 ){ pairs.push([first, second, third])}

            j+=3;
            index+=3;
        }

    }



 */
/**
 * 
 * @param {*} nums 
 * @returns 
 */

function threeSum(nums){
    if(nums.length <= 2) return [];
    if(nums.length == 3) return (nums[0] + nums[1] + nums[2] === 0)? [nums] : []; 
    
    let i ,j ,k = 0; let pairs = [];
    for(let start = 0; start < nums.length; start++){ 
        let end = false; let counter = 0;  let pointer = start;
        while(!end){
            
            if(counter >= nums.length ){ end = true}
            if(counter >= nums.length) break;
            i = nums[start];
            j = (pointer + 1 >= nums.length) ? nums[pointer + 1 - nums.length]: nums[pointer + 1];
            k = (pointer + 2 >= nums.length) ? nums[pointer + 2 - nums.length]: nums[pointer + 2];

            if(i+j+k === 0) {
                console.log([i, j,k])
                if(pairs.length <= 0){
                    pairs.push([i, j, k]);
                }else{
                    let include = 0;
                    pairs.forEach(e =>{ if( (e.includes(i) && e.includes(j) && e.includes(k)) ){include++;}});
                    if(include == 0){pairs.push([i, j, k]); }

                }
            }
            //prueba[start][n] = [i, j, k]
            pointer = (nums.length <= 5) ? pointer+1: pointer+2; 
            counter += 3;
        }
    }
       
    return pairs;
}

const nums = [-1, 0, 1, 2, 3];//[-1,0,1,2,-1,-4]
const nums2 = [-1, 0, 1, 2, 3, -4];
const nums3 = [0,0,0,0];
// [[-1,-1,2],[-1,0,1]]
let n = [-1,0,1,2,-1,-4];
let nn = [-2,0,1,1,2];

//Output: [[-1,-1,2],[-1,0,1]]
//console.log(threeSum(n));

/**
 *  ----------  CORRECT ANSWER -------------------
 *  * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
 * @param {array} nums 
 */

/**
 * 
 * @param {*} nums 
 * @returns 
 * Runtime: 185 ms, faster than 78.72% of JavaScript online submissions for 3Sum.
    Memory Usage: 53.4 MB, less than 31.48% of JavaScript online submissions for 3Sum.
 */
function threeNumSum(nums){
    if(nums.length <= 2) return [];
    // sort the array
    nums.sort((a, b) => a - b);

    let pairs = []; 
    // lef and rigth pointers
    let lp = 0; let rp = 0; let sum = 0; 
    for(let i = 0; i < nums.length ; i++){
        i = parseInt(i);
        // check if the current element is == to the previus
        if(i > 0 && nums[i] == nums[i-1]) {continue ;}
        lp = i+1; rp = nums.length - 1;

        // compute the sum
        while( lp < rp){
           sum = (nums[i]) + (nums[lp]) + (nums[rp]);
            //decremment the le right pointer
            if(sum > 0) { rp-=1; }
            //increase the left pointer
            else if(sum < 0) {lp+=1; }
            else{
                // we found  a triplex
                pairs.push([nums[i], nums[lp], nums[rp]]);
                //update the left pointer 
                lp += 1;
               while(nums[lp] == nums[lp-1] && lp < rp) {lp+=1;}
               
            }
        }
    }
   // console.log(P)
    return pairs;
}

/**
 * 
 * @param {*} nums 
 * @returns 
 *     Runtime: 155 ms, faster than 89.43% of JavaScript online submissions for 3Sum.
        Memory Usage: 52.6 MB, less than 67.83% of JavaScript online submissions for 3Sum.
 */
function ThreeSum(nums){
    nums.sort((a, b) => a - b);
    
    const ans = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i - 1] !== nums[i]) {
            let j = i + 1;
            let k = nums.length - 1;
            while (j < k) {
                if (nums[j] + nums[k] === -nums[i]) {
                    ans.push([nums[i], nums[j], nums[k]]);
                    j++;
                    while(j < k && nums[j - 1] === nums[j]) j++;
                    k--;
                    while(k > -1 && nums[k] === nums[k + 1]) k--;
                } else if (nums[j] + nums[k] < -nums[i]) {
                    j++;
                } else {
                    k--;
                }
            }
        }
    }
    
    return ans;
}
let x= [-1,0,1,2,-1,-4,-2,-3,3,0,4];
//[[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
console.log(threeNumSum(x))
console.log(ThreeSum(x))
