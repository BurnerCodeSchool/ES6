var numbers = [ 10, 20, 30 ];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}

var sum = numbers.reduce(function(sum, number){
	return sum + number;
}, 0);

console.log(sum); // 60

var primaryColors = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'green' },
];

var colors = primaryColors.reduce(function(prev, primaryColor){
	prev.push(primaryColor.color);
  return prev;
}, []);

console.log(colors); // ['red','blue','green']


function balancedParens(string) {
  return string.split("").reduce(function(previous, char) {
		if (previous < 0) {
      return previous;
    }
    if (char === '(') {
      return ++previous;
    }
    if (char === ')') {
      return --previous;
    }
    return previous;
  }, 0);
}

balancedParens('()()');
balancedParens('((asdwdsa()))');
balancedParens(')(');


var numbers = [1,1,2,2,3,4,4,4];

function unique(array) {
  return array.reduce(function(out, elem){
    var exists = out.some(function(e){
    	return e === elem;
    }); 
    if (!exists) {
      out.push(elem);
    }
    return out;
  }, []);
}

unique(numbers);
