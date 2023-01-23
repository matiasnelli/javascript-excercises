const fibonacci = function(count) {
    if (count < 0) return "OOPS"; // sets the conditions for when user inputs either a negative number or 0
    if (count === 0) return 0; // sets the conditions for when user inputs either a negative number or 0

    let a = 0; // declare variable to set an initial value
    let b = 1; // declare variable to set an initial value

    for (let i = 1; i < count; i++) {
        let temp = b;

        b= a + b; // not var, const or let bc those are to declare a variable. We are not creating a new instance, we are updating values
        a= temp;
    }
    return b;
};

console.log(fibonacci(6)); // 8
// 1,1,2,3,5,8

// Do not edit below this line
module.exports = fibonacci;