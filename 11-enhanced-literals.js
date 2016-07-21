const color = 'red';

// typical object declaration
const Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};

// using enhanced literal notation
const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
