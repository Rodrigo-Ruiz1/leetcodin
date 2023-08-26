var sortedSquares = function(nums) {
    let right = nums.length - 1
    let left = 0
    let array = []
    while (left <= right) {
        if (nums[left] * nums[left] > nums[right] * nums[right]) {
            array.splice(0,0, (nums[left]*nums[left]))
            left ++
        } else {
            array.splice(0,0, (nums[right]*nums[right]))
            right --
        }
    }
    return array
    
};

let nums = [-4,-1,0,3,10]
console.log(sortedSquares(nums))