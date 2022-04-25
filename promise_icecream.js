let shop_open = false;

let order = (time, work) => {
	return new Promise((resolve, reject) => {
		if (shop_open) {
			resolve();
		} else {
			reject(console.info("Our Shop is Closed!"));
		} .catch(() => {
			console.info("Customer left... like, damn nigga we closed we did you even knock in the first place?")
		})
	});
};

order();
