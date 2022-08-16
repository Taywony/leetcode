/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    
    let reverseNum = [];
    reverseNum = x.toString().split("").reverse().join("");
    reverseNum = Number(reverseNum);
    
    if(reverseNum == x) return true;
    else return false;
    
};