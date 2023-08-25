var groupAnagrams = function(strs) {
    let map = {}
    for (i=0;i<strs.length;i++) {
        let sorted = strs[i].split('').sort().join('');
        if (map[sorted]) {
            map[sorted].push(strs[i])
        } else {
            map[sorted] = [strs[i]]
        }
    }
    return Object.values(map)
};


let strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))