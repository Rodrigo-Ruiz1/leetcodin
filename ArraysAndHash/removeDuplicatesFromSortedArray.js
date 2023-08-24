var removeDuplicates = function(nums) {
    let set = new Set()
    for (i=0;i<nums.length;i++) {
        if (set.has(nums[i])) {
            nums = nums.splice(i)
            i--
        } else {
            set.add(nums[i])
        }
    }
    return nums
};

let nums = [1,1,2]
console.log(removeDuplicates(nums))
