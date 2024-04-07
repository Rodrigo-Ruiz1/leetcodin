var dailyTemperatures = function(temperatures) {
    let result = []
    let days = 0
    let count
    for (i=0;i<temperatures.length;i++) {
        count = i + 1
        if (i != temperatures.length) {
            while (count != temperatures.length) {
                if (temperatures[i] < temperatures[count]) {
                    days += 1
                    count += 1
                    break
                } else if (temperatures[count] == undefined) {
                    days = 0
                    break
                } else if (temperatures[i] > temperatures[count] && count == temperatures.length - 1){
                   days = 0
                   break
                } else {
                    days += 1
                    count += 1
                }
                console.log('test')
            }
        }
        result.push(days)
        days = 0
    }
    return result
};

let temperatures = [30,60,90]
console.log(dailyTemperatures(temperatures))