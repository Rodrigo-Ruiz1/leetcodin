var destCity = function(paths) {
    let map = {}
    for (let i = 0; i < paths.length; i++) {
        if (map[paths[i][0]]) {
            continue
        } else {
            map[paths[i][0]] = 1
        }
    }
    for (let i = 0; i < paths.length; i++) {
        if (!(paths[i][1] in map)) {
            return paths[i][1]
        }
    }
    
};

// var destCity = function(paths) {
//     let map = {}
//     for (let i = 0; i < paths.length; i++) {
//         for (let j = 0; j < paths[i].length; j++) {
//             if (map[paths[i][j]]) {
//                 map[paths[i][j]] += 1 + j
//             } else {
//                 map[paths[i][j]] = 1 + j
//             }
//         }
//     }
//     for (path in map) {
//         if (map[path] == 2) {
//             return path
//         }
//     }
    
// };

let  paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
console.log(destCity(paths))