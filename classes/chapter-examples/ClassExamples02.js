// // Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.
// //Which ever argument is not included returns an 'undefined' for that property.

// // Next, set default values for 1 or more of the parameters in constructor.

// class Astronaut {
//    constructor(name = "Pete", age = 1, mass = 12){
//      this.name = name;
//      this.age = age;
//      this.mass = mass;
//    }
// }

// let tortoise = new Astronaut();

// console.log(tortoise.name, tortoise.age, tortoise.mass);

// // What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!
// // let frog = new Astronaut("Shelly", 4, 52, "male", "blue", "Hello world")
// let frog = new Astronaut("Shelly",4)
// console.log(frog)

//Extra arguments did not return 'undefined'. It's like they were just skipped. 
// class Car {
//   constructor(make, model, year, color, mpg){
//      this.make = make;
//      this.model = model;
//      this.year = year;
//      this.color = color;
//      this.mpg = mpg;
//   }
// }
// // let newCar = new Car("Chevy", 'Astro', 1985, 'gray', 20)
// let newCar = new Car("Tesla", 'Model S', 2019)

// // console.log(typeof newCar.year)
// console.log(newCar)

class Plant {
  constructor(type, height) {
     this.type = type;
     this.height = height;
  }

  grow()  {
     this.height = this.height + 1;
  }
}

let newTestPlant = new Plant("daisy", 12)
console.log(newTestPlant)