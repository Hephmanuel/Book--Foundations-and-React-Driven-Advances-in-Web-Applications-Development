//Operators

//COMPARISON OPERATORS
a = 10; 
a < 11; //Returns true 
console.log(a < 11); //Displays true in console 
var test = a > 20; //Declares a variable named test and gives it the value of false. 
console.log(test); //Displays false in console 
a >= 10; //Returns true 
a <= 20; //Returns true 
a == 10; //Returns true 
a === "10"; //Returns false because a holds an integer value of 10 and not string value "10"

//LOGICAL OPERATORS
a = 1; 
b = 2; 
console.log(a < 3 && b < 3); //Prints true as both a and b contain values that are less than 3. 
console.log(a > 3 && b < 3); //Prints false as the first condition (a > 3) is not true. 
console.log(a > 3 || b < 3); //Prints true as at least one condition (b < 3) is true. 
console.log(!(a < 3)); //Prints false as condition (NOT a < 3) is false. 
console.log(!(a < 3) || !(b > 3)); //Prints true as one of the conditions (NOT b > 3) is true.

//TERNARY OPERATORS
var age = 17; 
var adult = (age > 20)? "Yes" : "No"; 
console.log(adult); //This should display the string "No"

//BITWISE OPERATORS
5 << 1; //Equivalent of 5 * 2 
5 <<2; //Equivalent of 5 * 4 
5 <<3; //Equivalent of 5 * 8 
40 >> 1; //Equivalent of 40 / 2 
40 >>2; //Equivalent of 40 / 4 
40 >>3; //Equivalent of 40 / 8

//TYPEOF OPERATOR
typeof "Manuela Manuel"; //Returns the value "string" 
typeof false; //Returns the value "boolean" 
typeof (10 + 10); //Returns the value "number" 
typeof 33; //Returns the value "number"