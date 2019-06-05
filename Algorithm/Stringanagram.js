const utility = require('./utility');
const readline = require('readline-sync');

function Anagram() {
    var str1 = readline.question("Enter first string :");
    var str2 = readline.question("Enter second string :");
    var status = utility.isAnagram(str1, str2);
    if (status == true) {
        console.log(str1 + " and " + str2 + " are anagrams");
    } else {
        console.log(str1 + " and " + str2 + " are not anagrams");
    }
}
Anagram();