const Interface = require('interface')
const rl = require('readline-sync');
const MyInterface = new Interface('bubbleSort', 'binarySearch', 'insertionSort')

class MyClass extends MyInterface {
    constructor() {
        super()
    }

    bubbleSort(arr, len) {
        var i, j, stop;
        for (i = 0; i < len; i++) {
            for (j = 0, stop = len - i; j < stop; j++) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }
        console.log(arr)
        return arr;
    }
    binarySearch(items) {
        //var items = this.bubbleSort();
        console.log("fjkfbf", items)
        var value = rl.question("Enter the word you want to search:");
        let firstIndex = 0;
        let lastIndex = items.length - 1;
        let middleIndex = Math.floor((lastIndex + firstIndex) / 2);

        while (items[middleIndex] != value && firstIndex < lastIndex) {
            if (value < items[middleIndex]) {
                lastIndex = middleIndex - 1;
            } else if (value > items[middleIndex]) {
                firstIndex = middleIndex + 1;
            }
            middleIndex = Math.floor((lastIndex + firstIndex) / 2);
        }

        return console.log((items[middleIndex] != value) ? -1 : middleIndex);

    }
    insertionSort(arr) {
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < arr[0]) {
                //move current element to the first position
                arr.unshift(arr.splice(i, 1)[0]);
            } else if (arr[i] > arr[i - 1]) {
                //leave current element where it is
                continue;
            } else {
                //find where element should go
                for (var j = 1; j < i; j++) {
                    if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
                        //move element
                        arr.splice(j, 0, arr.splice(i, 1)[0]);
                    }
                }
            }
        }
        console.log("insertion sort", arr)
        return arr;
    }
}

function data() {
    const instance = new MyClass()
    var size = rl.question("Enter the size of array:");
    var arr = []
    for (let i = 0; i < size; i++) {
        arr[i] = rl.question("Enter the element of array:");
    }
    instance.bubbleSort(arr, arr.length)
    instance.binarySearch(arr)
    instance.insertionSort(arr)
}
data();