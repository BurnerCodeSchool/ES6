// typical function including extra conditionals 
// to set default values for function parameters
function sum(a, b) {
  if (a === undefined) {
    a = 0; 
  }
  if (b === undefined) {
    b = 0; 
  }
  return a + b;
}

// using ES6 default parameters we can 
// get same results with much less code
function sum(a = 0, b = 0) {
  return a + b;
}
