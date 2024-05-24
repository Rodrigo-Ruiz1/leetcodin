function prefixSum(nums) {
    let output = []
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            output.push(nums[i])
            continue
        }
        output.push(output[i - 1] + nums[i])
    }
    return output
}

let nums = [1,2,3,4,5,6,7,9]
console.log(prefixSum(nums))