//revisit

var trap = function(height) {
    let total = 0
    let water = 0
    let left = 0
    let right = height.length
    let innerLeft = 0
    let innerRight = 1

    while (left <= right) {
        while (height[innerLeft] > height[innerRight]) {
            if (height[innerRight] < height[innerLeft] && height[innerRight + 1] == undefined && height[innerRight] < height[innerRight-1]) {
                water = 0
                innerLeft ++
                innerRight = innerLeft + 1
                continue
            }
            
            if (height[innerLeft] >= 1) {
                water = water + (height[innerLeft] - height[innerRight])
                console.log('index: ', left, 'left', height[innerLeft], 'right', height[innerRight], 'water', water)
                innerRight ++
            }
        }
        innerLeft = innerRight
        innerRight = innerLeft + 1
        total += water
        water = 0
        left = innerLeft

    }
    return total
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))