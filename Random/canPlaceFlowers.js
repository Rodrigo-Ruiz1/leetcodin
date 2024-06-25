var canPlaceFlowers = function(flowerbed, n) {
    let right = 0
    if (flowerbed.length == 1 && flowerbed[0] == 0) {
        return true
    }
    while (right <= flowerbed.length) {
        if (flowerbed[right] == 0) {
            if (flowerbed[right - 1] !== 1 && flowerbed[right + 1] !== 1) {
                n -= 1
                flowerbed[right] += 1
            }
        }
        right ++
    }
    return n <= 0
};

let flowerbed = [1,0,0,0,1]
let n = 1
console.log(canPlaceFlowers(flowerbed, n))