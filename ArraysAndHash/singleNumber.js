var singleNumber = function(nums) {
    let map = {}

    for (let i = 0;i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
    }
    for (element in map) {
        if (map[element] == 1) {
            return element
        }
    }
};

let nums = [2,2,1]
console.log(singleNumber(nums))