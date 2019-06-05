var rl = require('readline-sync');

class BubbleSort {
    bubblesortInt(arr) {
        var len = arr.length,
            i, j, stop;

        for (i = 0; i < len; i++) {
            for (j = 0, stop = len - i; j < stop; j++) {
                if (arr[j] > arr[j + 1]) {
                    this.swap(arr, j, j + 1);
                }
            }
        }
        console.log(arr)
        return arr;
    }
    swap(arr, first_Index, second_Index) {
        var temp = arr[first_Index];
        arr[first_Index] = arr[second_Index];
        arr[second_Index] = temp;
    }

}
var obj = new BubbleSort();
var size = rl.question("Enter the size of array:");
var arr = []
for (let i = 0; i < size; i++) {
    arr[i] = rl.question("Enter the element of array:");
}
obj.bubblesortInt(arr)