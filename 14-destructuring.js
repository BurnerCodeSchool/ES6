// a simple object
var expense = {
  type: 'Buisiness',
  amount: 45
}

// The ES5 way of pulling vars from an object
var type = expense.type;
var amount = expense.amount;

// the ES6 way of pulling vars from an object
const { type, amount } = expense;



// another object
const savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
}
// the ES5 way of destructuring 
function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}
fileSummary(savedFile); // The file repost.jpg is of size 14040

// the ES6 way
function fileSummaryDestruct({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}
fileSummaryDestruct(savedFile); // The file repost.jpg is of size 14040




// a simple array
const companies = [
  'Google',
  'Facebook',
  'Uber'
];

// arrays can be destructured as well
const [name, name2, name3, name4] = companies;
name; // Google
name2; // Facebook
name3; // Uber
name4 // undefined

// destructuring with the rest operator
const [name, name2, ...rest] = companies;
name; // Google
name2; // Facebook
rest; // ['Uber']
