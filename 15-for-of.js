// the for of loop functions very similarly to a for loop 
// but does not require all the setup and iterator operation
// where for of loops really shine is when working with generator functions

const numbers = [1,2,3,4];
let total = 0;

for (let number of numbers) {
  total += number;
}
total; // 10
