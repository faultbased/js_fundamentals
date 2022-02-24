const inv = {
	sunglasses: 12,
};

const myExecutor = (resolve, reject) => {
	if (sunglasses > 0) {
		resolve("Sunglasses order processed.");
	} else {
		reject("Sunglasses order processed");
	}
};

const orderSunglasses = () => {
	new promise(myExecutor);
};

console.log(orderSunglasses());
