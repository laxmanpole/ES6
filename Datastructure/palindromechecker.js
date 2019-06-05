var read = require('readline-sync')
var dequeimpln = require('./implementation/deque')
    // var deque = new l.Deque()

function palindromeChecker() {
    var deque = new dequeimpln.Deque
    var arr = []
    var str1;
    var str2;

    try {
        var word = read.question(' enter the string :')
        if (!isNaN(word)) throw 'enter a valid word'
        palindromeChecker.prototype.addbegin = function() {
            arr = word.split('')
            for (let i = 0; i < arr.length; i++) {
                deque.addFront(arr[i])
            }
        }
        palindromeChecker.prototype.removebegin = function() {
            for (let i = 0; i < arr.length; i++) {
                str1 += ' ' + deque.removeFront()
            }
        }
        palindromeChecker.prototype.addfront = function() {
            for (let i = 0; i < arr.length; i++) {
                deque.addFront(arr[i])
            }
        }
        palindromeChecker.prototype.removerear = function() {
            for (let i = 0; i < arr.length; i++) {
                str2 += ' ' + deque.removeRear()
            }
        }
        palindromeChecker.prototype.compare = function() {
            if (str1 === str2) {
                console.log(word + ' is a Palindrome ')
            } else {
                console.log(word + ' is not a palindrome ')
            }
        }
    } catch (err) {
        console.log(err.message)
    }
}
/**
 * function calls.
 */
palindromeChecker()