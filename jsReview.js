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


true && true //
false && true //
1 == 1 && 2 == 1 //
"test" === "test" //
1 == 1 || 2 != 1 //
true && 1 == 1 //
false && 0 != 0 //
true || 1 == 1 //
"test" == "testing" //
1 != 0 && 2 == 1 //
"test" != "testing" //
"test" == 1 //
!(true && false) //
!(1 == 1 && 0 != 1) //
!(10 == 1 || 1000 == 1000) //
!(1 != 10 || 3 == 4) //
!("testing" == "testing" && "Zed" == "Cool Guy") //
1 == 1 && (!("testing" == 1 || 1 == 0)) //
"chunky" == "bacon" && (!(3 == 4 || 3 == 3)) //
3 == 3 && (!("testing" == "testing" || "Ruby" == "Fun")) //


// Arrays
// ---------
// #1a Define an array of pet names
// #1b write a conditional statement that logs "Too many pets" if your pet array contains more than 3 pets
// or "this is fine; no problem here" if your pet array contains 3 or fewer pets
// #1c



// #2 How could we use arrays to represent something like a checkerboard?
// Look up "multi dimensional arrays" and implement one to represent a checkerboard.





// #3 Look up and use the following array methods: .pop(), .push()




// #4 As above, look up and use the following array methods: .find(), .forEach() - Try this after the "Enumerable Functions" assignment






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





// DOM Manipulation
// ---------

// Learn how to use .addEventListener() - Create a set of <li> like in the Advanced DOM checkpoint,
// but instead of using onclick, use the function .addEventListener() to pass a callback when we register an event.
// Use a different event than "click" - try "mouseenter" or "dblclick" or "keydown" - experiment!
