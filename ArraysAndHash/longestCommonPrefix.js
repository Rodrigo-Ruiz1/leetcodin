var longestCommonPrefix = function(strs) {
    let map = {}
    if (strs.length == 1) {
        return strs[0]
    }
    for (i=0;i<strs.length;i++) {
        for (j=0;j<strs[i].length;j++) {
            if (map[strs[i][j]]) {
                map[strs[i][j]]++
            } else {
                map[strs[i][j]] = 1;
            }
        }
    }
    console.log(map)
    let currentMax = 0;
    let result = "";
    for (element in map) {
        if (currentMax == 0 && map[element] <= 1) {
            return ""
        }
        if (map[element] > currentMax) {
            currentMax = map[element]
        }

        if (map[element] == currentMax && currentMax > 1) {
            result += element
        }
    }
    return result
};


const strs = ["a"]


console.log(longestCommonPrefix(strs))