let stocks = {
	Fruits: ["strawberry", "Banana", "Apple"],
};

let is_shop_open = true;

//function that contains 2 params
let order = (time, work) => {
	//return a new promise flow
	return new promise((resolve, reject) => {
		if (is_shop_open) {
			setTimeout(() => {
				resolve(work());
			}, time);
		} else {
			reject(
				"Ayoooo, noCAP but we ain't serving nobodies right now. Come back never, STUPID."
			);
		}
	});
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`));
