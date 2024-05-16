var checkIfExist = function(arr) {
    if (arr.length <=1 ) {
        return false
    }
    let doubles = []
    for (element in arr) {
        doubles.push(arr[element] * 2)
    }
    for (element in doubles) {
        if (arr[element] == 0) {
            doubles.splice(element, 1)
        }
        if (doubles.includes(arr[element])) {
            return true
        }
    }
    return false
    
};

let array = [10, 2, 5, 3]
console.log(checkIfExist(array))
array = [-2,0,10,-19,4,6,-8]
console.log(checkIfExist(array))