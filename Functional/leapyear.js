var rl = require('readline-sync');

function leapYear(year) {
    var result;
    if (((year % 4 == 0) && (year % 100 !== 0)) || (year % 400 == 0)) {
        result = true;
    } else {
        result = false;
    }
    return result

}
var year = rl.question("Enter the year:");
var result = leapYear(year);
if (result == true) {
    console.log("it is leap year");
} else {
    console.log("it is not leap year");
}