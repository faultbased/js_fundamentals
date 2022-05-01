class car {
	constructor(color, brand, model) {
		this.color = "Firebrand Red";
		this.brand = brand;
		this.model = model;
	}
}

const carK = new car("Earth Green", "Honda", "Civic SE");

console.info(carK);
console.info(carK.brand);
