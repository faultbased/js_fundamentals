let one = (two) => {
	console.info("This is step 1, let's take a glance at step 2...");
	two();
};

let two = () => {
	setTimeout(() => {
		console.info("Well, step 2 seems below average... which is fine");
	}, 3000);
};

one(two);
