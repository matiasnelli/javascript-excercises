const convertToCelsius = function(f) {
    return Math.round((f-32) * (5/9)) // 'round' to one decimal place
};

const convertToFahrenheit = function(c) {
    return Math.round((c * 9/5) + 32)
};

console.log(convertToCelsius(32));

console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};