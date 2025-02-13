var findClosestNumber = function(nums) {
    let current
    let output = Infinity
    for (let i = 0; i < nums.length; i++) {
        current = nums[i]
        if (Math.abs(current) < Math.abs(output)) {
            output = current
        } else if (Math.abs(current) == Math.abs(output)) {
            output = Math.max(current, output)
        }
    }
    return output
};


let nums = [-4,-2,1,4,8]
console.log(findClosestNumber(nums))