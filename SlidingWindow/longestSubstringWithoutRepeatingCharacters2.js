var lengthOfLongestSubstring = function(s) {
    if (s.length == 0) {
        return 0
    }
    let currentLongest = 0
    let max = -Infinity
    let stack = []

    for (i=0;i<s.length;i++) {
        console.log('current element: ', s[i])
        while (stack.includes(s[i])) {
            stack.shift()
            currentLongest -= 1
        }
        stack.push(s[i])
        currentLongest += 1
        max = Math.max(currentLongest, max)
    }
    return max
}


let s = "aabaab!bb"
// let s = 'aabc'

console.log(lengthOfLongestSubstring(s))