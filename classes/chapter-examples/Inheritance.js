class Felidae {
	constructor() {
		this.claws = "retractable";
	}
}

class Panthera extends Felidae {
	constructor() {
    super();
		this.roar = "loud";
	}
}

class Tiger extends Panthera {
	constructor() {
    super();
		this.hasStripes = "true";
	}
}

// let tigger = new Tiger();
// tigger.age = 5
let bigCat = new Felidae()
console.log(bigCat)
bigCat.color = "blue"
console.log(bigCat)
let tigger = new Tiger()
console.log(tigger)

// console.log(tigger);
// console.log(tigger.hasStripes)
// console.log(tigger.roar)
// console.log(tigger.claws)
// console.log(Felidae)