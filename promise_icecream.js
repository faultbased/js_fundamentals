import { stocks } from "./stockArray.js";

let shop_open = true;
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
				console.info("Employee 2 shift has ended and has clocked out!")
			);
		}, 2500);
	});
