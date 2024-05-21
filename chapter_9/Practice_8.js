//Functions
//By direct declaration 
function addTwoNumbersA(number1, number2){ 
    return number1 + number2; //Add the two numbers passed when function is called 
    } 
    //By expression 
var addTwoNumbersB = function(number1, number2){ 
    return number1 + number2; 
    } 
    

console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA and print return value (50). 
console.log(addTwoNumbersB(20,30)); //Call addTwoNumbersB and print return value (50).

//Define a function that receives a number to be squared 
function square(number){ 
    number = number**2; 
    return number; 
   } 
   var number = 20; //Declare variable that holds number to be squared 
   var numberSquared = square(number); //Pass number (by value) to the square() function 
   console.log(numberSquared); //The function returns 400 
   console.log(number); //The value of number variable outside the function remains 20

   function multiplier(){ 
    var product = 1; 
    for (var x=0; x < arguments.length; x++){ 
    product = product * arguments[x]; 
    } 
    return product; 
   } 
   console.log(multiplier(10,30));//Prints 300 to the console 
   console.log(multiplier(10,30,10));//Prints 3000 to the console

   var accumulatedTotal = 0; //Declare and initialize a global variable. 
//Declare function named sum that expects two parameters named number1 and number2. 
function sum(number1, number2){ 
 //The variables named total, number1 and number2 below are function scope variables. 
 //They are not visible from outside the function. 
 var total = number1 + number2; 
 //Update the global variable named accumulatedTotal. 
 //Even though not declared within the function, it is visible. 
 accumulatedTotal = accumulatedTotal + total; 
 return total; 
} 
console.log(sum(2,3)); //Call sum() function and print to console the total returned. 
console.log(sum(10,20)); //Call sum() function and print to console the total returned. 
console.log(accumulatedTotal); //Show the latest value held in the global variable. This should return 35