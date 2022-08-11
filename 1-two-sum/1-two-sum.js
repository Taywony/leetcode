/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let array = [];
    
    for(let i = 0; i < nums.length; i++){
        if (target >= nums[i]) {
            array.push(nums[i]);
            console.log(array)
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if( target == nums[i] + nums[j]) return [i,j];
        }
        
    }
}