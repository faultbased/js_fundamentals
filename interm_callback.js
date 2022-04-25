import { stocks } from "./stockArray.js";

let order = (call_production) => {
	console.info("Order placed. Please call production");

	call_production();
};

let production = () => {
	console.info("Production has started");
	setTimeout(() => {
		console.info(`${stocks.fruits[2]}s have been selected!`);
		setTimeout(() => {
			console.info("The fruit has been chopped");
			setTimeout(() => {
				console.info(
					`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`
				);
				setTimeout(() => {
					console.info("Start the machine");
					setTimeout(() => {
						console.info(`Ice cream placed on ${stocks.holder[0]}`);
						setTimeout(() => {
							console.info(`${stocks.toppings[0]} as toppings`);
							setTimeout(() => {
								console.info("Serve Ice cream");
							}, 2500);
						}, 3500);
					}, 2500);
				}, 1500);
			}, 1500);
		}, 2500);
	}, 1000);
};

order(production);
