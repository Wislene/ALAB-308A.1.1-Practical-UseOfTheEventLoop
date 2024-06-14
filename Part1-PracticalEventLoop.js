// Part1: Stack Overflow
// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.

let counter = 0;

function recursiveFunction() {
  counter += 1;
  console.log("counter: " + counter);
  recursiveFunction();
}
// recursiveFunction ();

{
  try {
    recursiveFunction();
  } catch (error) {
    console.error(error);
  }
}
