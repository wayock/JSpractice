// JavaScript Review Exercises
// Do these as you are introduced to the concepts through the curriculum.
// Try to do these without googling or notes as a "check-in" to how well you are remember concepts.
// It's ok to repeat the same exercises as a daily "warm-up."

// Conditionals
// ---------
// Reimplement the conditional assigned (print response to letter grades) but instead of letters, use numeric ranges.
// ie. 93-100 returns "A", 80-93 returns "B" etc.
// make sure to think about handling incorrect input.

let grade = 95;
if (grade > 93 && grade <= 100) {
  console.log("You received an A! Excellent work! Congratulations on passing the assignment!");
} else if (grade > 80 && grade < 93) {
  console.log("You received a B! Nice job! Congratulations on passing the assignment!");
} else if (grade > 70 && grade < 80) {
  console.log("You received a C. Congratulations on passing the assignment!");
} else if (grade > 60 && grade < 70) {
  console.log("You received a D. You passed the assignment.  What parts of the assignment did you struggle with?  Write those down and talk to your mentor about them at your next meeting.");
} else if (grade >= 0 && grade < 60) {
  console.log("You received a F on this assignment.  You did not pass the assignment and you'll need to redo it before moving on to the next checkpoint.");
} else {
  console.log("You must enter a number between 0 - 100.")
}

//Alex suggested simplifying the code.  I came up with the following.


let grade = 95;
if (grade > 93) {
  console.log("You received an A! Excellent work! Congratulations on passing the assignment!");
} else if (grade >= 80) {
  console.log("You received a B! Nice job! Congratulations on passing the assignment!");
} else if (grade >= 70) {
  console.log("You received a C. Congratulations on passing the assignment!");
} else if (grade >= 60) {
  console.log("You received a D. You passed the assignment.  What parts of the assignment did you struggle with?  Write those down and talk to your mentor about them at your next meeting.");
} else if (grade >= 0) {
  console.log("You received a F on this assignment.  You did not pass the assignment and you'll need to redo it before moving on to the next checkpoint.");
} else {
  console.log("You must enter a number between 0 - 100.")
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
if (userLoggedIn || firstTimeVisitor) {
  displayPage;
} else {
  redirectToSignUpPage;
}


true && true //true
false && true // false
1 == 1 && 2 == 1 // false
"test" === "test" // true
1 == 1 || 2 != 1 // true
true && 1 == 1 //true
false && 0 != 0 //false
true || 1 == 1 //true
"test" == "testing" //false
1 != 0 && 2 == 1 //false
"test" != "testing" //true
"test" == 1 //false
!(true && false) //false
!(1 == 1 && 0 != 1) //false
!(10 == 1 || 1000 == 1000) //false
!(1 != 10 || 3 == 4) //false
!("testing" == "testing" && "Zed" == "Cool Guy") //true
1 == 1 && (!("testing" == 1 || 1 == 0)) //true
"chunky" == "bacon" && (!(3 == 4 || 3 == 3)) //false
3 == 3 && (!("testing" == "testing" || "Ruby" == "Fun")) //true


// Arrays
// ---------
// #1a Define an array of pet names
// #1b write a conditional statement that logs "Too many pets" if your pet array contains more than 3 pets
// or "this is fine; no problem here" if your pet array contains 3 or fewer pets
// #1c
let petNames = ["Spot", "Fido", "Bingo", "Sparky", "Chance", "Sunny"];
if (petNames.length > 3) {
  console.log('Too many pets');
} else {
  console.log('this is fine; no problem here');
}
// #2 How could we use arrays to represent something like a checkerboard?
// Look up "multi dimensional arrays" and implement one to represent a checkerboard.

let checkerBoard = [[0, 1, 2, 3, 4, 5, 6, 7, 8], [0, 1, 2, 3, 4, 5, 6, 7, 8]];
console.log(checkerBoard);

// #3 Look up and use the following array methods: .pop(), .push()

checkerBoard.pop(); //removes [0, 1, 2, 3, 4, 5, 6, 7, 8] in checkerBoard[1]
checkerBoard[1].pop();//removes 8 in checkerBoard [1][9]

// #4 As above, look up and use the following array methods: .find(), .forEach() - Try this after the "Enumerable Functions" assignment

// For Loops
// ---------
// We use loops to repeat a block of code a set amount of time.
// #1a Use a for-loop to print "Hello" to the console 10 times.

for (i = 0; i < 10; i++){
  console.log("Hello");
}

// #1b Use a for-loop to print the numbers 1-100 to the console.

for (i = 1; i < 101; i++){
  console.log(i);
}

// #1c Use a for-loop to print the numbers 100-1 to the console.

for (i = 100; i > 0; i--){
  console.log(i);
}

// We also use loops to interact with indexed data structures (like strings and arrays).
// Remember that we access these structures using bracket notation and the index number: myString[2] or myArray[14]
// By using the "length" property on these structures, we can tell our loop to run once for every entry.
// #2a Write a for-loop that will print each letter of a string to the console

let mySampleString = "cat";
for (i = 0; i < mySampleString.length; i++) {
  console.log(mySampleString[i]);
}
// #2b Write a for-loop that will print each entry of an array to the console
let mySampleArray = [1, 2, "cat", "dog"]
for (i = 0; i < mySampleArray.length; i++) {
  console.log(mySampleArray[i]);
}

// #2c (harder) Combine your for-loops to look at an array of strings and print each lettter of each string to the console.
// Samples to use://let mySampleString = "cat"; let mySampleArray = [1, 2, "cat", "dog"]

//you can nest for loops inside of each other.  2 for loops nested (nested for loops).
//link explaining nested for loops: https://stackoverflow.com/questions/36413159/understanding-nested-for-loops-in-javascript
let myArrayOfStrings = ["cat", "dog", "mouse", "moose", "artichoke"];
for (i=0; i < myArrayOfStrings.length; i++) { //outer loop
for (j=0; j < myArrayOfStrings[i].length; j++) { //inner loop
console.log(myArrayOfStrings[i][j]);
}}

// Strings
// ---------

// Enumerable Functions
// ---------

// Given an array of strings, use the .filter() method to create a new array that contains only strings that include the letter 'e'
//link to stackoverflow explaining how to filter array by character https://stackoverflow.com/questions/35235794/filter-strings-in-array-based-on-content
let myArrayOfStrings2 = ["eee", "ddd","cat", "dog", "mouse", "moose", "artichoke"];
let eWords = myArrayOfStrings2.filter(eWord => eWord.includes("e"));
console.log(eWords);

// Use the reduce function to return a new array that adds up all items in your shopping cart

let myShoppingCart = [12, 4, 5, 16, 8, 9, 98, 9];
let totalCost = myShoppingCart.reduce((totalCost, item) => totalCost + item);
console.log(totalCost);
// Then, use change your reducer callback to only add up items that are less than 10.
let under10 = myShoppingCart
  .filter(item => item < 10)    //make sure to not have a semicolon here!
  .reduce((under10, item) => under10 + item);
console.log(under10);

// DOM Manipulation
// ---------

// Learn how to use .addEventListener() - Create a set of <li> like in the Advanced DOM checkpoint,
// but instead of using onclick, use the function .addEventListener() to pass a callback when we register an event.
// Use a different event than "click" - try "mouseenter" or "dblclick" or "keydown" - experiment!
