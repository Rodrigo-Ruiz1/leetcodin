var productExceptSelf = function(nums) {
    let result = []
    let temp
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            result.push(1)
            continue
        }
        result.push(result[i - 1] * nums[i - 1])
    }
    for (let i = nums.length - 1; i >= 0; i --) {
        if (i == nums.length - 1) {
            temp = nums[i]
            continue
        }
        result[i] = result[i] * temp
        temp = nums[i] * temp
    }
    return result
};

let nums = [-1,1,0,-3,3]

console.log(productExceptSelf(nums))