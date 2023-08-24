var isValid = function(s) {
    let map = {')': '(', '}': '{',']': '['}
    let stack = []
    for (i=0;i<s.length;i++) {
        if (stack.length == 0) {
            stack.push(s[i])
        } else if (map[s[i]] == stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.length == 0
};

let s = "(){}}{"
console.log(isValid(s))