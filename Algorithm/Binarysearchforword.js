const fs = require('fs')
var rl = require('readline-sync');
const utility = require('./utility')
var arr;
const getData = new Promise((resolve, reject) =>
    fs.readFile('./file.txt', 'utf8', (err, data) => {
        //if has error reject, otherwise resolve
        return err ? reject(err) : resolve(data);
    })
);
getData.then(data => {
        console.log('Data: ', data)
        arr = data.split(',');
        console.log('Data: ', arr)
        var word = rl.question("Enter the word you want to search:");
        var result = utility.binarySearch(arr.sort(), word)
        console.log(result)
        if (result == -1) {
            console.log("word is not exist")
        } else {
            console.log("word is available in file")
        }

    })
    .catch(error => console.log('Error: ', error));