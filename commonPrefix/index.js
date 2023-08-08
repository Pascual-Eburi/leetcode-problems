/**
 * Write a function to find the longest common prefix string amongst an array of strs.
    If there is no common prefix, return an empty string "".
 * @param {Array} strs: the array of strings
 *  @return {String} prefix: the longen prefix if exists other whise, empty string 
 */
function commomPrefix(strs){
     let cut = 0; let prefix = ''; let end = false;
     let current = ''; let prev = ''; let next = '';
    if(strs.length <= 1) return strs.join(" ");
    for(let i = 1; i < Math.round(strs.length + 1/3) ; i+=2){
        current = strs[i]; 
        prev = (i == 1) ? strs[parseInt(i) - 1]: prefix;
        next = (strs[parseInt(i) + 1] || strs[parseInt(i) + 1] == '' )? strs[parseInt(i) + 1] : current ;
        cut = 0; end = false; prefix = '';

        if(next && current && prev){
            while(!end){
                if(!current[cut]) end = true; 
                if(prev[cut] == current[cut] && current[cut] == next[cut]){
                    if(prev[cut] && prev[cut] !== prefix[cut]) prefix+=prev[cut];
                
                }else{   end = true;  }

                cut++;
                
            }

        }
           
        
    }
    
    return prefix;

}

console.log(commomPrefix(["baab","baac"]))