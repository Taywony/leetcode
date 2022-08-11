/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let result = 0;
    let temp = nums.sort((a,b) => a-b);
    
    for(let i = 0; i < temp.length; i++) {
        result += temp[i];
    }
    
    for(let i = 1; i < temp.length; i ++) {
        if(temp[i-1] == temp[i]) { 
            result -= (temp[i] * 2);
        }
    }
    return result;
};