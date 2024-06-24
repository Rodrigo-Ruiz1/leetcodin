var reverseVowels = function(s) {
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    let left = 0
    let right = s.length - 1
    let temp = ""
    s = s.split("")
    while (left < right) {
        if (!vowels.includes(s[left])) {
            left ++
        }
        if (!vowels.includes(s[right])) {
            right --
        }
        if (vowels.includes(s[left]) && vowels.includes(s[right])) {
            temp = s[left]
            s[left] = s[right]
            s[right] = temp
            left ++
            right --
        }
    }
    s = s.join("")
    return s
};

let s = "hello"
console.log(reverseVowels(s))

