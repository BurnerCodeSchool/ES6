
// in this example the rest operator takes an unknown number of function arguments
// and magically condenses them into a single array
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => { return sum + number }, 0);
};
addNumbers(1,2,3,4,5,6,7,8,9,10); // 55


// in this example the spread operator takes the contents of an array
// and magically spreads them out
const firstArray = [ 'one', 'two', 'three' ];
const secondArray = ['four', 'five', 'six' ];

[ ...firstArray, ...secondArray ] // ["one", "two", "three", "four", "five", "six"]
