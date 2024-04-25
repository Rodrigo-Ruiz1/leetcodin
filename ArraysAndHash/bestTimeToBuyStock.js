var maxProfit = function(prices) {
    let left = 0
    let right = left + 1
    let current = 0
    let max = 0

    while (right <= prices.length -1) {
        if (prices[right] < prices[left]) {
            left = right
        } else {
            current = prices[right] - prices[left]
        }
        max = Math.max(current, max)
        right +=1
    }
    return max
    
};

let prices = [1,2, 6, 1]

console.log(maxProfit(prices))