// Looping Problems

// Write a function that will accept 2 numbers and return the sum of the range between those two numbers
// ex. 3, 7 --> 3 + 4 + 5 + 6 + 7 = 25, so the function would return 25

// Write a function that counts up to a given number, prining each number. If the number is divisible by 3, instead print "fizz"
// If the number is divisible by 5, instead print "buzz." 
// If the number is divisible by both 3 and 5, instead print "fizzbuzz".

// =================================================================================================================

// Function Problems

// Write a function that accepts a number and returns a boolean based on whether that number is even or odd (This is in Bloc already)

// Using the above function, write a function that accepts an array of numbers and returns a new array.
// replace any even number in the original array with the string "even" and any odd number with the string "odd"

// Write  a function that accepts a character (single string character, ex: "w") and returns a boolean based on whether that char
// is a vowel or consonant.

// =================================================================================================================

// Array Problems

// Write a function that takes an array and reverses it (without the Array.reverse method)
// Do this in place and returning a new array

// Write a function that accepts an array of numbers and a single number and returns a new array of any numbers greater than the single number.

// =================================================================================================================
//Object Problems

// We need to sort a group of animals into two boxes
// Below is an array of animal objects that are either soft or notSoft
// write a function that will sort them into two separate arrays of animal names, softAnimals and notSoftAnimals

let mixedUpAnimals = [
  {name: 'chinchilla', soft: true},
  {name: 'armadillo', soft: false},
  {name: 'bear', soft: true},
  {name: 'porcupine', soft: false},
  {name: 'hedgehog', soft: false},
  {name: 'honey badger', soft: false},
  {name: 'mouse', soft: true}
];

// You are a director of a local community theater and need to evaluate a series of scripts to see if your personnel can accomodate
// the requirements. Write a function that will take in an array of scripts and return true or false based on whether your array of actors
// meets the needs of the script.
let myActors = [
  {name: 'Bill', age:'22', gender: 'M', canSing: true, canDance: true}
  , {name: 'Leslie', age:'56', gender: 'F', canSing: true, canDance: false}
  , {name: 'Amrita', age:'23', gender: 'M', canSing: false, canDance: true}
  , {name: 'Amir', age: 56, gender: 'M', canSing: false, canDance: true}
  , {name: 'Laila', age: 34, gender: 'F', canSing: true, canDance: true}
  , {name: 'Brian', age:'17', gender: 'M', canSing: true, canDance: false}
  , {name: 'Ashley', age:'22', gender:'F', canSing: false, canDance: false}
]


// Tell Me What this Code Does

function whatIsX(x) {
  let y = x + 10;

  function innerFunction(inner) {
    return inner * 2;
  }

  return innerFunction(y);
}

whatIsX(10);