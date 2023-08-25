var strStr = function(haystack, needle) {
    for (i=0;i<haystack.length - (needle.length - 1);i++) {
        if (haystack.substr(i, needle.length) == needle) {
            return i
        }
    }
    return -1
};

let haystack = "sadbutsad"
let needle = "sad"

console.log(strStr(haystack, needle))
substr()