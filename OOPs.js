const vehicleObj = {
  brand: "Yamaha",
  model: "R15",
};

class Dog {
  constructor() {
    // non parameterized constructor
    this.name = "Lab";
    this.height = 100;
    this.weight = 60;
    this.food = "milk";
  }

  // Methods
  run() {
    // do not use line 18
    // console.log(this.name + " of height " + this.height + " is running");
    console.log(`${this.name} of height: ${this.height} is running`);
  }

  play() {
    console.log(`${this.name} of height: ${this.height} is playing`);
  }

  eat() {
    console.log(`${this.name} of height: ${this.height} is eating`);
  }
}

const lab = new Dog(); // non parameterized constructor ( default values )
console.log(lab);

class Vehicle {
  // constructor
  constructor(brand, model, noOfWheels = 2) {
    // default value for noOfWheels
    // this represents the vehicle blueprint
    // helps in creating new attributes/properties
    this.brand = brand;
    this.model = model;
    this.noOfWheels = noOfWheels;
  }

  // Getter Function
  displayInfo() {
    return `${this.model} from ${this.brand} has ${this.noOfWheels} wheels`;
    // return `Circle[radius=${this.radius}]`
  }

  // setter functions
  setWheels(noOfWheels) {
    this.noOfWheels = noOfWheels;
  }

  getAllBikes(vehicles) {
    return vehicles.filter((v) => v.noOfWheels === 2);
  }
}

// Prototype
// Accelerate
Vehicle.prototype.accelerate = function () {
  return `Accelerating ${this.model} from ${this.brand}`;
};
// Brake
Vehicle.prototype.brake = function () {
  return `Stopping ${this.model} from ${this.brand}`;
};

// const Bharat = new Vehicle("Bharat Benz", "Multi-Axle", 6); // parameterized constructor ( passing values with new )

// const Bike = new Vehicle("Yamaha", "R15");

// const Auto = new Vehicle("Bajaj", "Pagio", 2);

// Inheritance
class Bus extends Vehicle {
  constructor(brand, model) {
    super(brand, model, 6); // calls the parent constructor
  }
}

const BharatBenz = new Bus("Bharat Benz", "Multi-Axle");

class Bike extends Vehicle {
  constructor(brand, model, engine='Two-Stroke') {
    super(brand, model, 2); // calls the parent constructor
    this.engine = engine;
  }
}

const Yamaha = new Bike("Yamaha", "R15");

const Honda = new Bike("Honda", "Active");

class Auto extends Vehicle {
  constructor(brand, model) {
    super(brand, model, 3); // calls the parent constructor
  }
}

const Bajaj = new Auto("Bajaj", "Pajio");

console.log(BharatBenz);
console.log(Yamaha);
console.log(Bajaj);

console.log(Bajaj.getAllBikes([BharatBenz, Yamaha, Honda, Bajaj]));

// Normal Function vs Arrow Function
// **** do not use function to create custom objects ****
// function Normal(name, age) {
//   this.name = name;
//   this.age = age;
//   // function keyword function can also act like a blueprint
//   console.log("Normal");
// }

// const Obj = new Normal("Sam", 45);
// console.log(Obj);

const Normal = () => {
  console.log("Normal");
};

// const Obj2 = new Normal("Sam", 45);

// Normal();

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function () {
  const response = JSON.parse(xhr.responseText);
  console.log(response);
  console.log(
    response.filter((cty) => {
      const { currencies = {} } = cty;
      // refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
      return Object.keys(currencies).includes("USD");
    })
  );
};
