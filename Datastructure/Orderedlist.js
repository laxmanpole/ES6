var utility = require('./utility')
var read = require('readline-sync')
var list = require('./implementation/Linkedlist')

function List() {
    try {
        var linklist = new list.LinkedList()

        var data = utility.fileCall('file.txt')
        if (!data) {
            throw new TypeError('data not available in file.');

        }
        for (let index = 0; index < data.length; index++) {
            linklist.add(data[index])
        }
        var d = linklist.display()
        console.log(d)

        var name = read.question('Enter the data you want to search: ')
        var check = linklist.search(name)

        if (check) {
            linklist.remove(name)
        } else {
            linklist.add(name)
        }
        linklist.sort()
        var d = linklist.display()
        console.log(d)

        utility.writeFile('file.txt', d)
    } catch (err) {
        console.error(err)
    }
}
List()