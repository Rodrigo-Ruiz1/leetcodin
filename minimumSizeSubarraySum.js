// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

var minSubArrayLen = function(target, nums) {
    let total = 0
    let left = 0
    let minimum = nums.length+1
    for (i=0;i<nums.length;i++) {
        total += nums[i]
        while (total >= target) {
            minimum = Math.min(minimum, i+1 - left)
            total -= nums[left]
            left++
        }
    }
    if (minimum == nums.length+1) {
        return 0;
    } else {
        return minimum;
    }
};

// const target = 213
// const nums = [12,28,83,4,25,26,25,2,25,25,25,12]
const target = 12
const nums = [4,2,1,5,7,10]


console.log(minSubArrayLen(target, nums))