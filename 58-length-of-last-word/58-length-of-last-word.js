/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let spl = s.split(" ");
    
while(spl[spl.length-1] == ""){
    spl.pop();
}
    return spl[spl.length-1].length;
};