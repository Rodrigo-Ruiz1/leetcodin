var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '')
    let right = s.length-1
    let left = 0
    while (left <= right) {
        if (s[left].toLowerCase() == s[right].toLowerCase()) {
            left ++
            right --
        } else {
            console.log(left, right, s[left], s[right])
            return false
        }
    }
    return true
}
let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))