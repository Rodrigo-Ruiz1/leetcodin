var evalRPN = function(tokens) {
    let temp = 0
    let array = []
    let total = 0
    for (i=0;i<tokens.length;i++) {
        console.log(tokens[i])
        if (tokens[i] != '+' && tokens[i] != '-' && tokens[i] != '*' && tokens[i] != '/') {
            array.push(tokens[i])
        } else if (tokens[i] == '+') {
            console.log('ARRAY', array, parseInt(array[array.length - 1]), parseInt(array[array.length - 2]))
            temp = parseInt(array[array.length - 2]) + parseInt(array[array.length - 1])
            array.pop()
            array.pop()
            array.push(temp)
        } else if (tokens[i] == '-') {
            temp = parseInt(array[array.length - 2]) - parseInt(array[array.length - 1])
            array.pop()
            array.pop()
            array.push(temp)
        } else if (tokens[i] == '*') {
            temp = parseInt(array[array.length - 2]) * parseInt(array[array.length - 1])
            array.pop()
            array.pop()
            array.push(temp)
        } else if (tokens[i] == '/') {
            console.log(parseInt(array[array.length - 2]) / parseInt(array[array.length - 1]))
            temp = parseInt(array[array.length - 2]) / parseInt(array[array.length - 1])
            if (temp < 1 && temp > -1 && temp != 0) {
                temp = 0
            }
            array.pop()
            array.pop()
            array.push(temp)
        }
    }
    return parseInt(array)
};

let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN(tokens))