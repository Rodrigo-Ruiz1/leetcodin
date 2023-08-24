var maxArea = function(height) {

    let left = 0
    let right = height.length - 1
    let current = 0
    let max = -Infinity

    while (left < right) {
        let shorter = Math.min(height[right], height[left])
        current = (right -left)* shorter
        max = Math.max(max, current)
        if (shorter == height[right]) {
            right --
        } else {
            left ++
        }
    }
    return max
};

height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))