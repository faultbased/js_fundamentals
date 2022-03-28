function monitorCount(rows, columns) {
	let eval = (rows * columns);
	return eval;
};

const numOfMonitors = monitorCount(5, 4);

//calls the return value via a variable that stores it after 'returning'

console.log(numOfMonitors);

/*calling the function via "tree/branch" method of chaining through the 
return variable "eval" and grabbing the results directly from the function*/

console.log(eval(monitorCount(5, 4)));
