var kidsWithCandies = function(candies, extraCandies) {
    let result = []
    let max = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        if ((candies[i] + extraCandies) >= max) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
    
};

let candies = [2, 3, 5, 1, 3]
let extraCandies = 3
console.log(kidsWithCandies(candies, extraCandies))