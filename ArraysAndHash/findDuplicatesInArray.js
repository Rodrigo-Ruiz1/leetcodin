var findDuplicates = function(nums) {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
    }
    nums = []

    for (element in map) {
        if (map[element] >1) {
            nums.push(element)
        }
    }
    return nums
    
};

let nums = [4,3,2,7,8,2,3,1]
console.log(findDuplicates(nums))