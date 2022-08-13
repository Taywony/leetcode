/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let sum = 0;
    
    for(let i = 0; i < prices.length; i++) {
        for(let j = i+1; i < prices.length; j++) {
            if(prices[i] < prices[j]){ 
                if(sum < prices[j] - prices[i]) {
                    sum = prices[j] - prices[i];
                }
            }else break;
        }
    }
    
    return sum;
};