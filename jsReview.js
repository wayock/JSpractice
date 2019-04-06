// JavaScript Review Exercises
// Do these as you are introduced to the concepts through the curriculum.
// Try to do these without googling or notes as a "check-in" to how well you are remember concepts.
// It's ok to repeat the same exercises as a daily "warm-up."

// Conditionals
// ---------
// Reimplement the conditional assigned (print response to letter grades) but instead of letters, use numeric ranges.
// ie. 93-100 returns "A", 80-93 returns "B" etc.
// make sure to think about handling incorrect input.

let grade = "96";

if (grade > 100){
   console.log("Enter a number between 1-100.")
} else if (grade >= 90){
   console.log("A")
} else if (grade >= 80){
  console.log("B")
} else if (grade >= 70){
  console.log("C")
} else if (grade >= 60){
  console.log("D")
} else if (grade >= 0){
  console.log("F")
} else {
  console.log("Enter a number between 1-100.")
}






// Logical Operators
// ---------
// Check out this chapter of "Learn Ruby the Hard Way"
// https://learnrubythehardway.org/book/ex28.html
// Complete all these exercises - making flashcards might even be useful for you.
// Write them up in JS (all you really need to do is use === instead of ==
// Gaining confidence in very "abstract" forms of the Boolean operators makes more user-friendly cases almost a non-issue
// for example, this logic would show a page to new visitors and returned, authenticated users,
// but otherwise would take a user to a signup page:



true && true // true
false && true // false
1 == 1 && 2 == 1 // false
"test" === "test" // true
1 == 1 || 2 != 1 // true
true && 1 == 1 // true
false && 0 != 0 // true???
true || 1 == 1 // true
"test" == "testing" // false
1 != 0 && 2 == 1 // false
"test" != "testing" // true
"test" == 1 // false
!(true && false) // true
!(1 == 1 && 0 != 1) // false
!(10 == 1 || 1000 == 1000) // false
!(1 != 10 || 3 == 4) // false
!("testing" == "testing" && "Zed" == "Cool Guy") // true
1 == 1 && (!("testing" == 1 || 1 == 0)) // true
"chunky" == "bacon" && (!(3 == 4 || 3 == 3)) // false
3 == 3 && (!("testing" == "testing" || "Ruby" == "Fun")) // false


// Arrays
// ---------
// #1a Define an array of pet names

var petNames = ["Haroo", "Spot", "Lassie", "Lucky", "Chance", "Sofie", "Maxie"];

// #1b write a conditional statement that logs "Too many pets" if your pet array contains more than 3 pets
// or "this is fine; no problem here" if your pet array contains 3 or fewer pets

if (petNames > ){

}

// #1c



// #2 How could we use arrays to represent something like a checkerboard?
// Look up "multi dimensional arrays" and implement one to represent a checkerboard.

var checkerboard = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
];

console.log(checkboard);


// #3 Look up and use the following array methods: .pop(), .push()

.pop() // removes last item or array.
.push() // adds to the end of an array.

let lastNum = checkerboard.push();

console.log(lastNum);




// #4 As above, look up and use the following array methods: .find(), .forEach() - Try this after the "Enumerable Functions" assignment

var seven = checkerboard.find(10);




// For Loops
// ---------
// We use loops to repeat a block of code a set amount of time.
// #1a Use a for-loop to print "Hello" to the console 10 times.



// #1b Use a for-loop to print the numbers 1-100 to the console.



// #1c Use a for-loop to print the numbers 100-1 to the console.



// We also use loops to interact with indexed data structures (like strings and arrays).
// Remember that we access these structures using bracket notation and the index number: myString[2] or myArray[14]
// By using the "length" property on these structures, we can tell our loop to run once for every entry.
// #2a Write a for-loop that will print each letter of a string to the console




// #2b Write a for-loop that will print each entry of an array to the console

//var petNames = ["Maxie", "Spot", "Chance", "Fido", "Jojo", "Mr. Haroo"];




// #2c (harder) Combine your for-loops to look at an array of strings and print each lettter of each string to the console.
// Samples to use://let mySampleString = "cat"; let mySampleArray = [1, 2, "cat", "dog"]
//you can nest for loops inside of each other.  2 for loops nested (nested for loops).
//link explaining nested for loops: https://stackoverflow.com/questions/36413159/understanding-nested-for-loops-in-javascript

//var petNames = ["Maxie", "Spot", "Chance", "Fido", "Jojo", "Mr. Haroo"];




// Strings
// ---------

// Enumerable Functions
// ---------

// Given an array of strings, use the .filter() method to create a new array that contains only strings that include the letter 'e'
//link to stackoverflow explaining how to filter array by character https://stackoverflow.com/questions/35235794/filter-strings-in-array-based-on-content

//var petNames = ["Maxie", "Spot", "Chance", "Fido", "Jojo", "Mr. Haroo"];




// Use the reduce function to return a new array that adds up all items in your shopping cart



  //filter() example:


//console.log(under10Items); outputs [5, 3, 6, 3, 7, 8]

// Then, use change your reducer callback to only add up items that are less than 10.

// let shoppingCart = [5, 10, 11, 24, 10, 11, 14, 19, 35, 3, 6, 3, 7, 8, 99];





/* 1st Assessment:  **7 Functional Scope JS**
Objectives:
Interpret the use of function scope
Interpret the use of calling a function
Interpret the use of using function arguemnts
You scored a 0.5 out of 1*/
var function1 = function(x) {
  return "happy " + function2(x);
}

var function2 = function(x) {
  return "times " + x;
}

console.log(function1("Bloc"));    //output "happy times Bloc"




/* 8 Two Scopes**
Objectives:
Undersand how to define methods
Understand how to return a value from a method
Understand how to pass arguments
Apply conditional expressions and operators
You scored a 1 out of 1*/

function second(x) {
  if (x > 5) {
    x = 3
  }
  return first(x);
}

function first(n){
  return n + 5;
}

console.log(second(2));  //outputs 7

/* **9 Functional JavaScript Again**
Objectives:
Apply the each method to iterate over an array
Understand the concept of iteration
Demonstrate using a block as an argument
You scored a 0 out of 0.5 */

var x = 10;

function combine(a, b){
  return a + b + x;
}

var sum = combine(3, 5);

console.log(combine(sum, x));  //output 38 because 18 + 10 + 10


// Write a function that accepts 2 arguments, where both arguments are numbers and returns the sum of those two numbers.
function sum(x, y){
  return x + y;
}
sum(4, 5);


/*Below, we have an array of movie objects
// Using Javascript, loop through each object in the array
// and console.log the movie title of each movie*/

var bestMovies = [ {title: 'Star Wars'}, {title: 'Top Gun'}, {title: 'The Notebook'} ];

for (let i = 0; i < bestMovies.length; i++ ){
  console.log(bestMovies[i].title);
}

console.log(Object.keys(bestMovies[0]))

// Write a function that takes 2 arguments - an array of numbers and a number
// And returns true if the array contains the number and false otherwise
// Example:
// foo([2,4,7],7) would return true
// foo([2,4,5],7) would return false

function trueFalse(array, y){


for (i = 0; i < array.length; i++){

if (array[i] === y) {
  return true;
}
}
  return false;
};


console.log(trueFalse([2, 3, 4, 5, 6], 3));


/*Write a function that takes a single array of numbers
and returns a new array with each number being doubled in size.
Example: doubleValues([1,2,3]) => returns [2,4,6]*/

function double(x){
  return x.map(double => double * 2);
}

console.log(double([2, 3, 4, 5]));

// DOM Manipulation
// ---------

// Learn how to use .addEventListener() - Create a set of <li> like in the Advanced DOM checkpoint,
// but instead of using onclick, use the function .addEventListener() to pass a callback when we register an event.
// Use a different event than "click" - try "mouseenter" or "dblclick" or "keydown" - experiment!
