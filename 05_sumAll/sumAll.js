const sumAll = function(min, max) {
    let sum = 0; // specifies variable's initial value
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll(1,10)); // 55 (1+2+3+4+5+6+7...)

// Do not edit below this line
module.exports = sumAll;