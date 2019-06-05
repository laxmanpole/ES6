var read = require('readline-sync');
var stackAccess = require('./implementation/stack')


function balancedParentheses() {
    try {
        var st = new stackAccess.Stack(); // instantiating stack
        var exp = read.question("Enter a mathematical expression with parentheses ");
        var ch, i;
        for (i = 0; i < exp.length; i++) {
            ch = exp.charAt(i)

            if (ch == '(' || ch == '{' || ch == '[') {
                st.push(ch);
                // console.log(st);

            } else {
                switch (ch) {
                    case ')':
                        if (st.pop() != '(') {
                            return false;
                        }
                        break;

                    case '}':
                        if (st.pop() != '{') {
                            return false;
                        }
                        break;

                    case ']':
                        if (st.pop() != '[') {
                            return false;
                        }
                        break;


                }
            }
        }
        if (st.getSize() === 0)
            console.log(" balanced parentheses ");
        else
            console.log("not balanced parentheses ");

    } catch (err) {
        console.log("ERROR" + err);
    }
}


balancedParentheses()