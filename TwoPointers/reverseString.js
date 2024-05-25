var reverseString = function(s) {
    let left = 0
    let right = s.length - 1
    let temp
    while (left < right) {
        temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left ++
        right --
    }
    return s
};

//var reverseString = function(s) {
    //return s.reverse()
//}
let s = ["h","e","l","l","o"]
console.log(reverseString(s))