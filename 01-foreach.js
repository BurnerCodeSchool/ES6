var colors = [ 'red', 'blue', 'green' ];

// typical for loop              

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i])
}

// forEach results in the same action as a for loop 
// but with less code and less chances to make typos

colors.forEach(function(color){
	console.log(color);
});
