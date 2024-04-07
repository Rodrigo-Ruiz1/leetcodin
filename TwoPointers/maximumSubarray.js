var maxSubArray = function(nums) {
    let max = -Infinity
    let currentMax = 0

    for (i=0;i<nums.length;i++) {
        if (currentMax < 0) {
            currentMax = 0
        }
        currentMax += nums[i]
        max = Math.max(currentMax, max)
    }
    return max
};

let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))