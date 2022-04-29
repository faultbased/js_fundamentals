const apple = {
	color: "Green",
	price: {
		bulk: "$3/kg",
		smallQty: "$4/kg",
	},
};

//using dot notation to access individual key-pair values
console.info(apple.price.smallQty);
console.info(apple.color);
