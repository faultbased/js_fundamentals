let two = () => {
	console.info("You've been served.");
};

let one = (two) => {
	console.info("Called one; Referring two.");

	two();
};

let callNum = new Promise(function (resolve, reject) {
	resolve(one(two));
});

callNum
	.then(() => {
		setTimeout(() => {
			console.info("Resolved.");
		}, 4500);
	})
	.finally(() => {
		setTimeout(() => {
			console.info("End of Line.");
		}, 3000);
	});
