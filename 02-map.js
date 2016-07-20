var numbers = [1,2,3];
var doubleNumbers = [];

// typical for loop
for (var i = 0; i < numbers.length; i ++) {
  doublednumbers.push(numbers[i] * 2);
}

// using map produces same results
var doubled = numbers.map(function(number) {
  return number * 2;
});

// named function for better stacktraces
function doubleIt(number) {
  return number * 2;
}
var doubled = numbers.map(doubleIt);
