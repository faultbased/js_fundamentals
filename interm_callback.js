import { stocks } from "./stockArray.js";

let order = (call_production) => {
	console.info("Order placed. Please call production");

	call_production();
};

let production = () => {
	console.info("Production has started");
};

order(production);
