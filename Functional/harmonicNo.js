var rl = require('readline-sync');

function harmonicNumber(n) {
    var result = 0;
    while (n > 0) {
        result += 1 / n;
        n--
    }
    return result;

}
var n = rl.question("Enter the number:");
var result = harmonicNumber(n);
console.log(n + "th Harmonic number is: " + result);