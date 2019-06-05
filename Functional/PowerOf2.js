var rl = require('readline-sync');

function powerof2() {
    var n = rl.question("Enter the number:");
    var i = 0;
    var power = 1;
    if (n > 31) {
        console.log("value of number should be less than 31");

    } else {
        console.log("Powers of 2 that are less than 2^" + n);
        while (i <= n) {
            console.log("2^" + i + " = " + power);
            power = power * 2;
            i++;

        }

    }
}
powerof2();