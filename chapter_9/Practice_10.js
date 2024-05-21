//User-created object blueprints
function Person(firstName, lastName, height, weight){ 
    //Below are properties 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.height = height; 
    this.weight = weight; 
    //Below is a method 
    this.getFullName = function(){ return this.firstName + " " + this.lastName} 
    }

/*var person1 = new Person("Pius", "Onobhayedo",1.72, 80); 
var person2 = new Person("Mary", "Joseph", 1.7, 70) 
console.log (person1.firstName); //Prints out Pius 
console.log (person1.getFullName()); //Prints out Pius Onobhayedo 
console.log (person2.firstName); //Prints out Mary 
console.log (person2.getFullName()); //Prints out Mary Joseph

Math.E; //The static property E holds the value of Euler’s number i.e. 2.718281828459045. 
Math.PI; //The static property PI holds the value of Pi i.e. 3.141592653589793. 
Math.cos(45); //Method returns the cosine of number passed as argument. 
Math.abs(-30); //Method returns the absolute number equivalent of argument. 
Math.random( ); //Method returns random floating-point number between 0 and 1, inclusive of 0 and exclusive of 1. 
Math.max(10,5,60); //Method returns the maximum number among the arguments passed. 
Math.min(10,5,60); //Method returns the minimum number among the arguments passed.*/

/*var today = new Date(); //Get today’s date 
//Instantiate new Date passing year, month-index and day in numbers 
var birthday = new Date(1980,4,30); //Note that month index is 0-11 for Jan-Dec 
//Instantiate new Date passing equivalent datetime string with date same as above 
var birthday = new Date('May 30, 1980 19:00:00'); 
//Instantiate new Date passing date and time using numbers 
var birthday = new Date(1980, 4, 30, 19, 0, 0);//Passing year, month-index, day, hour, min, sec as numbers 
//Below is a simple function that calculates present age 
function calculateAge(birthday){ 
 var today = new Date(); 
 var difference = today - birthday; //Returns equivalent of time elapsed since 1970 i.e. epoch time 

 //Get the equivalent year for difference 
 var yearEquivalent = new Date(difference).getFullYear(); 
 //Subtract 1970 to get age. 
 return yearEquivalent - 1970; 
} 
//Invoke function calculateAge() 
var birthday = new Date (1980,12,30); 
console.log(calculateAge(birthday)); //Prints out birthday

function sleep(milliseconds) { 
 console.log("Going to sleep for " + milliseconds + " milliseconds...") 
 var begin = new Date().getTime(); 
 do{ 
 nextTime = new Date().getTime(); 
 }while(nextTime - begin < milliseconds) 
 console.log("Sleep over"); 
} 
//Call sleep 
sleep(3000); */

var re = new RegExp('xyz'); //'xyz' is the pattern to be matched.
var re = /xyz/;
var searchString = "Locate xyz pattern in this text. The xyz could be in XYZ location"; 
//Simply check if pattern is in searchString using test() method. 
console.log(re.test(searchString)); //Should return true as xyz pattern is present in searchString. 

//Find index position using exec() method 
console.log(re.exec(searchString)); 
//Find index position using search() method of String object passing the pattern as argument. 
console.log(searchString.search(re)); //Returns index position.

var re = /xyz/g;
var re = new RegExp('xyz','gi'); //'xyz' is the pattern to be matched; g and i options set.

var result; 
while((result = re.exec(searchString))!= null){ //loop until no more match 
 //display the index found and the string 
 console.log("Index position " + result.index + " contains " + result[0]); 
}

//JSON string: 
/*var personJSON1 =' { \ 
    "firstName":"Pius", \ 
    "lastName": "Onobhayedo", \ 
    "complexion": "brown", \ 
    "heightInMeters": 1.7,\ 
    "programmer" : true, \ 
    "olympicMedal" : null, \ 
    "degrees" : ["BSc", "MSc", "PhD"] \ 
   }'

   var personJSON2 =' { \ 
    "names":{ \ 
    "firstName":"Pius", \ 
    "lastName": "Onobhayedo" \ 
    }, \ 
    "complexion": "brown", \ 
    "heightInMeters": 1.7, \ 
    "programmer" : true, \ 
    "olympicMedal" : null, \ 
    "degrees" : ["BSc", "MSc", "PhD"] \ 
   } '
*/
//Convert JSON string named personJSON1 to object equivalent 
var p1Object = JSON.parse(personJSON1); 
console.log(p1Object); 
//Convert JSON string named personJSON2 to object equivalent 
var p2Object = JSON.parse(personJSON2); 
console.log(p2Object);

/*{ names: { firstName: 'Pius', lastName: 'Onobhayedo' }, 
 complexion: 'brown', 
 heightInMeters: 1.7, 
 programmer: true, 
 olympicMedal: null, 
 degrees: [ 'BSc', 'MSc', 'PhD' ] }*/

 var p1JSON = JSON.stringify(p1Object); 
var p2JSON = JSON.stringify(p2Object);

//dot notation approach to accessing object properties 
p1Object.complexion; //Returns brown 
p1Object.degrees[0]; //Returns BSc 
p2Object.names.firstName; //Returns Pius

