// var removeDuplicates = function(nums) {
//     let left = 0
//     let right = left + 1
//     while (left < nums.length - 1) {
//         while (nums[left] == nums[right]) {
//             nums.splice(right, 1)
//         }
//         right ++
//         left ++
//     }
//     return nums.length
    
// };

var removeDuplicates = function(nums) {
    let map = {}
    for (let i = 0; i<nums.length; i++) {
        if (map[nums[i]]) {
            continue
        } else {
            map[nums[i]] = 1
        }
    }
    let count = 0
    for (element in map) {
        count ++
    }
    return count
};

let nums = [1,1,2]
console.log(removeDuplicates(nums))