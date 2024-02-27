//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, gender, color){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.gender = gender;
     this.color = color
   }
}

let fox = new Astronaut('Fox', 7, 12, "male", "gray");

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.
fox.eyeColor = "green"
fox.child = "no"
console.log(fox)