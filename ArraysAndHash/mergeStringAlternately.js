var mergeAlternately = function(word1, word2) {
    let remaining
    let output = ""
    let tracker = 0
    while (word1.length > 0 && word2.length > 0) {
        if (tracker % 2 == 0) {
            output += word1[0]
            word1 = word1.slice(1)
        } else {
            output += word2[0]
            word2 = word2.slice(1)
        }
        tracker += 1
    }

    if (word1.length > 0) {
        output += word1
    } else {
        output += word2
    }
    return output
    
};

let word1 = "abcd"
let word2 = "pqrvwxyz"

console.log(mergeAlternately(word1, word2))