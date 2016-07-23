// ES5 requirements for classes with inheritenace
//first a car constructor
function Car(options){
	this.title = options.title;
}
// car can drive
Car.prototype.drive = function() {
	return 'vroom';
}

// now a child of car
function Toyota(options) {
  Car.call(this, options);
	this.color = options.color;
}
// without this special wiring toyota will not be able ti drive
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota
// toyota can also honk
Toyota.prototype.honk = function() {
  return 'beep';
}
// create an instance of Toyota
const car = new Toyota({color: 'red', title: 'rustbucket'}); // {"title":"rustbucket","color":"red"}
car.honk(); // beep
car.drive(); // vroom


// ES6 Class Inheritance
class Car {
  constructor({title}) {
    this.title = title;
  }
	drive() {
    return 'vroom';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
		this.color = options.color;
  }
  honk() {
    return 'beep';
  }
}

const car = new Toyota({color: 'red', title: 'rustbucket'}); // {"title":"rustbucket","color":"red"}
car.honk(); // beep
car.drive(); // vroom















