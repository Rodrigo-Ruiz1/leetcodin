var checkInclusion = function(s1, s2) {
    // for (i=0;i<s2.length;i++) {
    //     console.log('current substring', s2.substring(i, i+s1.length))
    //     let substring = s2.substring(i, i+s1.length).split('').sort().join('')
    //     let sorted = s1.split('').sort().join('')
    //     console.log(substring, sorted)
    //     if (sorted == substring) {
    //         return true
    //     }
    // }
    // return false

    let left = 0
    let right = s1.length
    let s2Sorted = ''
    let s1Sorted = s1.split('').sort().join('')
    while (right <= s2.length) {
        s2Sorted = s2.substring(left, right).split('').sort().join('')
        if (s1Sorted == s2Sorted) {
            return true
        } else {
            left ++
            right ++
        }
    }
    return false
};


let s1 = "ab"
let s2 = "eidboaoo"

console.log(checkInclusion(s1,s2))

// needs to be revised