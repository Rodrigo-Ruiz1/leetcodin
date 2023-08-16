function twoPointer(target, nums) {
    let first = 0
    let second = nums.length - 1

    while (first < second) {
        let sum = nums[first] + nums[second]
        if (sum == target) {
            return [first, second]
        }
        sum < target ? nums[first]++ : nums[second]--
    }
}

let target = -7;
let nums = [-13, -9, -5, -2, -1, 3, 4]

console.log(twoPointer(target, nums))