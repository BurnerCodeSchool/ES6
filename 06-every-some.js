var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var allComputersRunProgram = true;
var onlySomeCanRunProgram = false;

// using for loop
for(var i = 0; i < computers.length; i++) {
  var computer = computers[i];
  if(computer.ram < 16) {
    allComputersRunProgram = false;
  } else {
    onlySomeCanRunProgram = true;
  }
}

//every returns true if all elements in the array match
computers.every(function(computer){
	return computer.ram > 16;
});

//some returns true if any element in the array matches
computers.some(function(computer){
	return computer.ram > 16;
});

