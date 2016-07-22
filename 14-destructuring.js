
var expense = {
  type: 'Buisiness',
  amount: 45
}

// The ES5 way of pulling vars from an object
var type = expense.type;
var amount = expense.amount;

  
// the ES6 way of pulling vars from an object
const { type, amount } = expense;


const savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
}

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}
fileSummary(savedFile); // The file repost.jpg is of size 14040

function fileSummaryDestruct({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}
fileSummaryDestruct(savedFile); // The file repost.jpg is of size 14040
