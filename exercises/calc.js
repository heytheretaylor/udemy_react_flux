var readline = require('readline-sync');

var num1 = readline.question("Number one? ");
var num2 = readline.question("Number two? ");
var operator = readline.question("Please enter an operator (+, - , / , * ) ");

var operation = function(first_num, second_num, operator){
	if (!isNaN(num1) && !isNaN(num2)) {
		if (operator == "+" || operator == "-" || operator == "*" || operator == "/" || operation== "%"){
				var result = eval(first_num + operator + second_num);
    			console.log(first_num + " " + operator + " " + second_num + " = " + result)
		} else {
				console.log("invalid operator")
		}
	;} else {
		console.log("one of more of your numbers is invalid")
	}
};

operation(num1,num2,operator);
