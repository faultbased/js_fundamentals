import { stocks } from "./stockArray.js";

let shop_open = false;
let employee_two = false;

let order = (work) => {
	/*think of the promise as a function machine that 
	contains the settings/configuration of the promise and its structure; includes error handling*/
	return new Promise((resolve, reject) => {
		if (shop_open) {
			//promise endpoint if it resolves (completely)
			resolve(work());
		} else {
			//promise endpoint if it doesn't resolve at all
			reject(console.info("Our Shop is Closed!"));
		}
	});
};

order(() => console.info(`${stocks.fruits[1]} was selected!`))
	//first .then in the chain
	.then(() => {
		order(() => console.info("We've started production!"));
	})
	//using time
	.then(() => {
		setTimeout(() => {
			order(() =>
				console.info("Employee 1 has arrived to replace Employee 2!")
			);
		}, 2500);
	})

	.then(() => {
		setTimeout(() => {
			order(() =>
				console.info("Fruit has been chopped and added to mixing machine!")
			);
		}, 3100);
	})

	.then(() => {
		setTimeout(() => {
			order(() =>
				console.info("Employee 2 shift has ended and has clocked out!")
			);
		}, 2800);
	})		

	.then(() => {
		order(() => console.info(`${stocks.fruits[0]} and ${stocks.fruits[1]} have been added to the mix!`));
	})

	.then(() => {
		order(() => console.info("Ice Cream Machine initiates icecream making process!!!"));
	})

	.then(() => {
		order(() => console.info(`Ice cream has been put into a ${stocks.holders[0]}`));
	})

	.then(() => {
		order(() => console.info(`${stocks.fruits[0]} and ${stocks.fruits[1]} have been added to the mix!`));
	})

	.then(() => {
		order(() => console.info(`${stocks.toppings[0]} has been added on top!`));
	})

	.then(() => {
		order(() => console.info("Here's your order, enjoy your ice cream!"));
	})

	.catch(() => {
		console.info("The customer has left the building...")
	})

	.finally(() => {
		console.info("The day is over.")
	});
