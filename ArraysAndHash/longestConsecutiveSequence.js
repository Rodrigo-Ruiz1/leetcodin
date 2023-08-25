var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let length = 0
    let longest = 0
    for (i=0;i<nums.length;i++) {
        if (!set.has(nums[i] - 1)) {
            while (set.has(nums[i] + length)) {
                length ++
            }
            longest = Math.max(length, longest)
        }
        length = 0
    }
    return longest
};

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))