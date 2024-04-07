var threeSum = function(nums) {
    if (nums.length == 3) {
        return nums[0] + nums[1] + nums[2] == 0
    }
    let map = {}
    for (i=0;i<nums.length;i++) {
        if (map[nums[i]]) {
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
    }
    console.log(map)
    let left = 0
    let right = nums.length - 1
    let temp
    let result = []
    nums = nums.sort()
    while (left < right) {
        temp = (nums[left] + nums[right]) * -1
        console.log(temp, map[temp])
        if (map[temp] && map[temp] > 1) {
            result.push([nums[left], nums[right], temp])
        }
        left++
    }
    return result
    
};

let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))