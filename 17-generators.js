// a generator is a function that can pause execution
// and return a different value on successive calls
// a generator returns an object which consists of a value 
// and a flag to indicate if the function has finished
function * genfunction() {
	// things to do before yielding a value
	const upstreamValue = yield 'someValue';
	// things to do before being finished
  return upstreamValue;
}

const gen = genfunction();
console.log(gen); // {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: undefined}
gen.next(); // {"value":"someValue","done":false}
gen.next('otherValue'); // {"value":"otherValue","done":false}

//------------------
// a generator with multiple yields
function * colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

// one way to access all the yields
const gen = colors();
gen.next(); // {"value":"red","done":false}
gen.next(); // {"value":"blue","done":false}
gen.next(); // {"value":"green","done":false}
gen.next(); // {"done":true}

// another 
const myColors = [];
for( let color of colors()) {
  myColors.push(color);
}
myColors; // ["red","blue","green"]


//------------------
// using a generator to iterate specific fields of an object
const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: ' Alex',
  engineering: 'Dave',
}

function * TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer
}

const names = [];
for( let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
names; // ['Jill','Alex','Dave']

