//strategy - create hash map to determine occurances, sort from most to least frequent(maybe array), return based on k
var topKFrequent = function(nums, k) {
    let map = {}
    for (i=0;i<nums.length;i++) {
        if (map[nums[i]]) {
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
    }
    let array = []
    let currentMax = 0
    let currentElement
    for (i = k; i > 0; i--) {
        for (element in map) {
            if (map[element] > currentMax) {
                currentMax = map[element]
                currentElement = element
            }
        }
        array.push(currentElement)
        currentMax = 0
        currentElement = 0
        delete map[array[array.length - 1]]
    }
    return array.slice(0,k)
};

const nums = [1,1,1,2,2,3]
const k = 2

console.log('answer is',topKFrequent(nums, k))