var findTheDifference = function(s, t) {
    let mapS = {}
    let mapT = {}

    for (element in s) {
        if (mapS[s[element]]) {
            mapS[s[element]] ++
        } else {
            mapS[s[element]] = 1
        }
    }
    for (element in t) {
        if (mapT[t[element]]) {
            mapT[t[element]] ++
        } else {
            mapT[t[element]] = 1
        }
    }
    console.log(mapS, mapT)
    for (i=0;i<t.length;i++) {
        if (mapT[t[i]] == mapS[t[i]]) {
            continue
        } else {
            return t[i]
        }
    }
    
    
};

let s = "abcd"
let t = "abcde"

console.log(findTheDifference(s,t))