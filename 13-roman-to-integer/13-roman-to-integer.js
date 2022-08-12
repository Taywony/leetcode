/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
let Roman = new Map()
Roman.set("I", 1);
Roman.set("V", 5);
Roman.set("X", 10);
Roman.set("L", 50);
Roman.set("C", 100);
Roman.set("D", 500);
Roman.set("M", 1000);
    
    let sum = 0;
    
    for(let i = 0; i < s.length; i++) {
        sum += Roman.get(s[i]); 
    }
    
    for(i = 1; i < s.length; i++) {
        
        if( s[i] == "V" || s[i] == "X") {
            if(s[i-1] == "I") {
                sum -= 2;
            }
        }
        
        else if( s[i] == "L" || s[i] == "C") {
            if(s[i-1] == "X") {
                sum -= 20;
            }
        }
        
        
        else if( s[i] == "D" || s[i] == "M") {
            if(s[i-1] == "C") {
                sum -= 200;
            }
        }
        
    }
    
return sum;
};