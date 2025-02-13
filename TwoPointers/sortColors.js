var sortColors = function(nums) {
    let left = 0
    let right = left + 1
    let sorted = false
    let swaps = false
    let temp
    while (sorted == false) {
        console.log(nums)
        if (nums[left] > nums[right]) {
            temp = nums[right]
            nums[right] = nums[left]
            nums[left] = temp
            swaps = true
        }
        left ++
        right ++
        if (right > nums.length) {
            left = 0
            right = left + 1
            if (swaps == false) {
                sorted = true
            }
            swaps = false
        }
    }
    
};


let nums = [2,0,2,1,1,0]
console.log(sortColors(nums))