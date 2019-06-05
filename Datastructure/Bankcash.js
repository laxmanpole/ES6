var read = require('readline-sync');
var que = require('./implementation/queue')
var queue = new que.Queue();
try {
    var num = read.question("Entr no of people:");
    if (isNaN(num)) throw "It is not number,pls enter valid number";
    for (let i = 0; i < num; i++) {
        var name = read.question("Enter people name:");
        queue.enqueue(name);
    }

    var Totalbalance = parseInt(10000);

    for (let i = 0; i < num; i++) {
        console.log("Welcome:)" + queue.dequeue());

        var choice = read.questionInt("Enter 1. for deposit & 2.for withdraw:");
        switch (choice) {
            case 1:
                var deposit = read.questionInt("Enter a Deposit amount:");
                Totalbalance += deposit;
                console.log("Your amount deposit successfully ,& your amount is" + Totalbalance);
                break;
            case 2:
                var withdraw = read.questionInt("Enter a withdraw amount:");
                if (withdraw > Totalbalance) {
                    console.log("Insufficient balance,Enter new amount:");
                } else {
                    Totalbalance -= withdraw;
                    console.log("Your amount deposit successfully ,& your amount is:" + Totalbalance);
                }
                break;

        }
    }
} catch (err) {
    console.log(err);
}