var reverseWords = function(s) {
    s = s.split(" ").reverse().join(" ").trim()
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " " && s[i - 1] == " ") {
            s = s.substr(0, i) + s.substr(i + 1, s.length - 1)
            i = i - 1
        }
    }
    return s
    
};

let s = "the sky is blue"
console.log(reverseWords(s))