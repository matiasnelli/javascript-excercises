const palindromes = function (string) {
        let processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");   
    // [^A-Za-z] 
    // [A-Za-z] would match anything between A-Z, and a-z. 
    // [^] before A-Za-z indicates anything that is NOT alphabet characters, 
    // would be replaced with "" or aka deleted. 
    // g modifier means more than one. 
        let reversedString = (
            processedString
            .split("") 
            .reverse()   
            .join("")    
        );
        return processedString == reversedString;
};

console.log(palindromes('Matias')); // returns false (Matias is saitaM)
console.log(palindromes('A car, a man, a maraca')); // returns true

// Do not edit below this line
module.exports = palindromes;