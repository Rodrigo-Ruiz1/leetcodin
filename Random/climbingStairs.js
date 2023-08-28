var climbStairs = function(n) {
    if (n <=2) {
        return n
    } 

    return climbStairs(n -2) - climbStairs(n -1)
};

console.log(climbStairs(45))