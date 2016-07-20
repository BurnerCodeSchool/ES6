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
