var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i,1)
            i--
        }
    }
    return nums.length
};

let nums = [0,1,2,2,3,0,4,2]
let val = 2
console.log(removeElement(nums, val))