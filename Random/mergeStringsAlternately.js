var mergeAlternately = function(word1, word2) {
    let count = word1.length + word2.length - 1
    console.log(count)
    let result = ""
    while (count > 0) {
        if (word1.length > 0) {
            result += word1[0]
            word1 = word1.slice(1)
        }
        if (word2.length > 0) {
            result += word2[0]
            word2 = word2.slice(1)
        }
        count -= 1
    }
    return result
};
let word1 = "abc"
let word2 = "pqr"

console.log(mergeAlternately(word1,word2))