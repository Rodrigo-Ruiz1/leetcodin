var twoSum = function(numbers, target) {
    
    let left = 0
    let right = numbers.length - 1

    while (right > left) {
        if (numbers[left] + numbers[right] > target) {
            right --
        } else if (numbers[left] + numbers[right] < target) {
            left ++
        } else {
            return [left + 1, right + 1]
        }
    }
};

let numbers =  [2,7,11,15,20,21,22]
let target = 9

console.log(twoSum(numbers, target))