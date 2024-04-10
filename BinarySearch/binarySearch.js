var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let mid = Math.floor((right + left) / 2)
        if (nums[mid] == target) {
            return mid
        }
        if (nums[mid] > target) {
            right = mid
            mid = mid -1
        } else {
            left = mid
            mid = mid +1
            console.log(mid)
        }
    }
    return - 1
};

let nums = [-1,0,3,5,9,12]
let target = 9
console.log(search(nums,target))