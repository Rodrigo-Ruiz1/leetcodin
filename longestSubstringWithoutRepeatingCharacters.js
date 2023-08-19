var lengthOfLongestSubstring = function(s) {
    if (s.length == 0) {
        return 0
    }
    let currentLongest = 0
    let max = -Infinity
    let stack = []

    for (i=0;i<s.length;i++) {
        if (!stack.includes(s[i])) {
            stack.push(s[i])
            currentLongest += 1
        } else {
            let temp = 0
            for (element in stack) {
                if (stack[element] == s[i]) {
                    console.log('current element', stack[element])
                    console.log('stack before ', stack)
                    console.log('removing indexes between 0 and', temp)
                    stack.push(s[i])
                    stack.splice(0,temp+1)
                    console.log('stack after', stack)
                    currentLongest -= temp
                    break
                }
                temp += 1
            }
        }
        max = Math.max(currentLongest, max)
    }
    return max
};

let s = "aabaab!bb"

console.log(lengthOfLongestSubstring(s))