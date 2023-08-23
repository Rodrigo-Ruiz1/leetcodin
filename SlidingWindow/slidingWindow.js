//HELPFUL FOR
//subarrays
//substrings
//"k length", "K"

function slidingWindow(k, nums) {
    let currentSum = 0
    let max = -Infinity
    for(i=0;i<nums.length;i++) {
        //Keep adding the next index to currentSum
        currentSum += nums[i]
        if (i >= k - 1) {
            //Once currentSum contains the sum of k indices, compare to max and set accordingly
            max = Math.max(currentSum, max)
            currentSum -= nums[i-(k-1)]
            //first of k indices gets subtracted from current sum, loop will add the next index to stay within subarray of size k
        }
    }
    return max
}


const nums = [4,1,2,6,4,2,11,2,1,3,3,3]
const k = 3

console.log(slidingWindow(k, nums))