var largestAltitude = function(gain) {
    let array = [0]

    for (let i=0;i<gain.length;i++) {
        array.push(array[array.length - 1] + gain[i])
    }
    return Math.max(...array)
};

let gain =[-5,1,5,0,-7]
console.log(largestAltitude(gain))