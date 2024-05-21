//Aray Literals
//Declare a variable named vehicles and assign an array literal that contains three elements 
var vehicles = ["car","lorry","trailer"]; 
console.log(vehicles); //Prints out the array literal [ 'car', 'lorry', 'trailer' ] 
//Declare a variable named basket and assign an empty array literal. 
var basket = [ ]; 
console.log(basket); //Prints out the array literal [ ]

//Declare a variable named myExpressions and assign an array literal which contains expressions. 
var myExpressions = ["car", 2+3, 10, true]; //The second element includes a plus operation 
console.log(myExpressions); //Prints out [ 'car', 5, 10, true]

//Accessing Array Literals
console.log(myExpressions[0]); //Prints out 'car' 
console.log(myExpressions[1]); //Prints out 5 
console.log(myExpressions[2]); //Prints out 10 
console.log(myExpressions[3]); //Prints out true 
myExpressions[3] = false; //Change the expression at position 3. 
console.log(myExpressions[3]); //Prints out false

//Array literals can also contain undefined elements as shown below: 
var myExpressions = ["car", , 10, true]; //The second element (i.e. index position 1), is undefined 
console.log(myExpressions[1]); //Prints out undefined

//OBJECT LITERALS (Like dictionaries in python)
var myObject = { 
    name: { 
    firstName : "Pius", 
    surname: "Onobhayedo" 
    }, 
    expertise: "Software design and development", 
    languages: ["Python","JavaScript","Java","C++"], 
   
    isRetired: false, 
    favouriteCombination: 3 + 3 
   }

console.log(myObject.name); //Prints out { firstName: 'Pius', surname: 'Onobhayedo' }. 
console.log(myObject['name']); //Also prints out { firstName: 'Pius', surname: 'Onobhayedo' }. 
console.log(myObject.expertise); //Prints out Software design and development 
console.log(myObject['expertise']); //Also prints out Software design and development 
console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject.isRetired); //Prints out false 
console.log(myObject['isRetired']); //Also prints out false 
console.log(myObject.favouriteCombination); //Prints out 6 
console.log(myObject['favouriteCombination']); //Also prints out 6

//Accessing nested objects 
console.log(myObject.name.firstName); //Prints out Pius. 
console.log(myObject['name']['firstName']); //Also prints out Pius.

myObject.newProperty = "another property added"; //Add a new property named newProperty 
console.log(myObject); //Prints out the string, another property added

//DELETE OPERATORS
var phones = { 
    make: 'Samsung', 
    model: 'S7', 
    cost: 500 
    } 
    console.log('make' in phones); //Prints out true 
    delete phones.make; //Delete property phones.make 
    console.log('make' in phones); //Prints out false