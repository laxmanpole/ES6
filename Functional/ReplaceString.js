var rl = require('readline-sync');

function Replace() {
    this.replace = (str1, str2, str3) => {
        var str4 = str1.replace(str2, str3);
        console.log(str4);

    }
}
var d = new Replace()
var str1 = rl.question("Enter a String:");
var str2 = rl.question("Enter name you want to replace:");
var str3 = rl.question("Enter name you want to replace with:");
d.replace(str1, str2, str3)