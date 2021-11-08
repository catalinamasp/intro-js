/////////////////////////////////////
// Exercise Sheet 3: Conditionals. //
/////////////////////////////////////

// Conditionals branch off your code in multiple paths of execution that
// exclude some instructions in favor of others.

// Writing conditional code is almost as speaking in plain English. 
// In pseudo-code:

// if (CONDITION) {
//     // Do this.
// }
// else {
//    // Do that.
//}

// Of course, to achieve conditional execution you need to replace 
// CONDITION with a valid condition. That boils down to checking if a variable 
// is equal/smaller/larger to another one.

// In JavaScript, you have two ways to express equality:

// 1 === 1 // true
// 1 == 1  // true

// Because...why not? We will learn more about this in Exercise 3, 
// but until then use always the triple equal (===).


// EXERCISE 1. Basic Conditions.
////////////////////////////////

// Generate a random number from 0 to 100,000. Compare this randomly generated 
// number to the size of the population in Luzern that you have previously 
// computed in Exercise Sheet "Numbers".

// If the random number is larger than the population of
// Luzern print "Go Luzern!", if exactly equal print "Are we in the Matrix?",
// otherwise print "Few but good!"

// Hint: Use console.log() to print.

// EXERCISE 2. Block Party.
///////////////////////////

// The brackets of conditionals define a block scope. Depending on how you 
// define variables this has important implications.

// The following code isn't working. Why?
if (2 > 1) {
    let deepThought = 'Everything is obvious once you know the answer.'    
}
console.log(deepThought);

// a. Fix it using it var instead of let.

// b. Fix it using let.


// EXERCISE 3. Loose vs Strict Comparisons.
///////////////////////////////////////////

// Things aren't as equal as they seem at first sight in JavaScript.

// Run the following loose type comparisons.

if (1 == '1') console.log('True');
else console.log('False');

if (0 == false) console.log('True');
else console.log('False');

if (0 == []) console.log('True');
else console.log('False');

// Weird, right? See the full list of patological cases here:
// https://dorey.github.io/JavaScript-Equality-Table/

// At least we have learnt how to write if/else in a very compact way.

// Why do we have loose comparison at all? 
// JavaScript was designed to run in the browser, comparing input 
// from users with internal data. As all input from users is captured as a 
// string, loose type comparisons were useful (in some cases). 
// However, they tend to create more problems than what they solve in most of 
// the cases. 

// a. Make justice to sameness by replacing the loose comparisons above, with 
// strict comparisons (===).


// b. Checking if an array is empty is perhaps one of the few useful 
// loose type comparison usecases. Try it out.



// For more details, see:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness