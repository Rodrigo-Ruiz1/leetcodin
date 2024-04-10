var searchMatrix = function(matrix, target) {
    for(i=0;i<matrix.length;i++) {
        let left = 0
        let right = matrix[i].length - 1
        while (left <= right) {
            let mid = Math.floor((right + left) / 2)
            if (matrix[i][mid] == target) {
                return true
            } else if (matrix[i][mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
let target = 3

console.log(searchMatrix(matrix, target))