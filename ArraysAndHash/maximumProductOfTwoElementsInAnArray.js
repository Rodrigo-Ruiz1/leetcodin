var maxProduct = function(nums) {
    nums = nums.sort(function(a, b){return a-b})
    console.log(nums)
    index1 = nums[nums.length-1] - 1
    index2 = nums[nums.length-2] - 1
    return index1 * index2
    
};

let nums = [10, 2, 5, 2]
console.log(maxProduct(nums))