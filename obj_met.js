const group = {
	//method shorthand, w/ one argument
	start(status) {
		console.log(`the current group status: ${status}`);
		//remember, methods within object are separated using commas
	},

	//anon arrow function expression w/ no arguments
	lunch: () => {
		console.log("Pizza...?");
	},
};

group.start("breaktime");
group.lunch();
