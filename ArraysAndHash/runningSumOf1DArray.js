var runningSum = function(nums) {
    let result = []
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        result.push(total)
    }
    return result
    
};

let nums = [1,2,3,4]
console.log(runningSum(nums))