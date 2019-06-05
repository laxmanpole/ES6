const rl = require('readline-sync');
const utility = require('./utility')

function primenum() {
    var num = rl.question("Enter the no:");
    console.log("prime number upto " + num)
    for (let i = 2; i <= num; i++) {
        var res = utility.primenumber(i);
        if (res) {
            console.log(i);

        }
    }
}
primenum();