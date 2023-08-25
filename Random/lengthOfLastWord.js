var lengthOfLastWord = function(s) {
    s = s.split(' ')
    console.log(s[s.length -1] == '')
    while (s[s.length - 1] == '') {
        s.pop()
    }
    console.log(s)
    return s[s.length - 1].length
};


let s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s))