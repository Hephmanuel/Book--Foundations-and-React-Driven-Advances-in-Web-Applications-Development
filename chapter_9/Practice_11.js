//STRINGS
var x = 'This is a string literal'; 
var y = new String ('This is a String object');

console.log(x); //This will output 'This is a string literal' 
console.log(y); //This will output '[String: 'This is a String object']' 
console.log(y.toString()); //This will output 'This is a String object'

var z = x + y; 
console.log (z); //This will output 'This is a string literalThis is a String object'. Notice that there is no need to invoke toString() method.

console.log(x.length); //This should print out 24 which is the length of the string 'This is a string literal'
console.log(x.constructor); //This should output [Function: String]

var firstName = 'Pius'; 
var lastname = 'Onobhayedo'; 
var fullName = firstName.concat(' ' , lastname); //Concatenate firstName, space and last name 
console.log(fullName); //This should output the string 'Pius Onobhayedo' 
var fullName = firstName + ' ' + lastname; //This is equivalent to the concat statement above. 
console.log(fullName); //This should also output the string 'Pius Onobhayedo'

console.log(fullName.includes('Pius')); //Outputs true
var x = 'Let us search this text for pius. If Pius is found, …'; 
var regex = /pius/gi; //All occurences of Pius independent of case 
console.log(x.search(regex)); //This will return only the index of the first occurrence of condition specified in the regular expression i.e. 28 which is the index for 'pius'

var x = 'Let us search this text for pius. If Pius is found, …'; 
var searchTerm = 'pius'; 
var matchIndex; 
var startIndex = 0; //start from the beginning 
while((matchIndex = x.indexOf(searchTerm, startIndex)) != -1){ //returns -1 if no match is found 
 console.log(matchIndex); //Output the index of match 
 startIndex = matchIndex + 1; //change search start position to beyond the last match index 
}

var regex = /pius/gi; //All occurences of Pius independent of case 
var x = 'Let us search this text for pius. If Pius is found, …'; 
var match; 
while((match = regex.exec(x))!= null){ //loop until no more match 
 //Below should display the index found and the string. Expected output are: 
 //Index position 28 contains pius 
 //Index position 37 contains Pius 
 console.log("Index position " + match.index + " contains " + match[0]); 
}

var x = 'Let us search this text for pius. If Pius is found, …'; 
var regex = /pius/gi; //All occurences of Pius independent of case 
var y = x.replace(regex,'John'); //Replaces any match found with 'John' 
console.log(y); // This should output the string 'Let us search this text for John. If John is found, …' 
console.log(x); // This remains 'Let us search this text for pius. If Pius is found, …'

var x = 'Let us search this text for pius. If Pius is found, …'; 
var y = x.slice(34); //Counting from the beginning of the string (i.e. 0 index position), this will extract text from position 34 to the end. 
console.log(y); //Expected to output the string 'If Pius is found, …' 
var y = x.slice(28,32);//Counting from index position 28, extract text up to position 32 
console.log(y); // This should output the string 'pius'

var x = 'Let us search this text for pius. If Pius is found, …'; 
var y = x.slice(-1); //Extract from the last position. 
console.log(y); // Should return the string '...' 
var y = x.slice(-16, -12); //Extract from the 16th position from the rear to the 12th position from the rear 
console.log(y); //Should output the string 'Pius' 
var y = x.slice(-16);// Extract the letters from position 16 from the rear 
console.log(y);//This should return 'Pius is found, …'

//Array Object
//Create and initialize an array with 5 elements 
var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; 
//Use the object's length property to return the number of elements in the array. This should return 5. 
console.log(languages.length);

//log each element in the forEach loop 
languages.forEach(function(element) { 
    console.log(element); //This should output each element successively. 
   }); 

   languages.forEach(function(language, index) { 
    var output = index+1 + '. ' + language; 
    console.log(output); 
   });

var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript']; 
console.log(languages.indexOf('JavaScript')); //This should output 1 
//To return all occurrences, loop, indicating start Index each time, as we did for strings 
var searchTerm = 'JavaScript'; 
var matchIndex; 
var startIndex = 0; //start from the beginning 
while((matchIndex = languages.indexOf(searchTerm, startIndex)) != -1){ //returns -1 if no match is found 
 console.log(matchIndex); //Output the index of match 
 startIndex = matchIndex + 1; //change search start position to beyond the last match index 
} 
//The above while loop should output 1 and 5 to the console.

var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript']; 
languages.push('PHP'); 
console.log(languages); //This should print out ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript', 'PHP']

languages.pop(); 
console.log(languages); //This should print out ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'] having removed the last element, 'PHP'.

languages.shift(); 
console.log(languages); //This should print out ['JavaScript', 'Java', 'C#', 'C++', 'JavaScript'] having removed the first element, 'Python'.


languages.unshift('Python'); 
console.log(languages); //This should print out array having added 'Python' to the beginning of the array.

var mynumbers = [10, 20, 30, 40, 50]; 
var mydoublednumbers = mynumbers.map(function(number){ 
 return number * 2; 
}) 
console.log(mydoublednumbers); //This should output [20, 40, 60, 80, 100]

var mynumbers = [1, 2, 3, 4, 5, 6]; 
var myevennumbers = mynumbers.filter(function(number){ 
 return number % 2 == 0; //Test if the number is even 
}) 
console.log(myevennumbers); //This should output [2, 4, 6]

var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
var reduceOutput = mynumbers.reduce(function(accumulatedValue, number){ 
 return accumulatedValue + number; //Accumulate the sum iteratively 
}) 
console.log(reduceOutput); //This should output 55.

var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
//Define the reducer function 
var reducer = function(accumulatedValue, number){ 
 return accumulatedValue + number; 
} 
//Pass the reducer function to reduce() method 
var reduceOutput = mynumbers.reduce(reducer, 100) 
console.log(reduceOutput); //This should output 155 i.e. 100 + the accumulated values from array