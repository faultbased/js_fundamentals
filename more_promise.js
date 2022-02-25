const promise = new Promise((resolve, reject) => {
	const res = 1;
	// here is the async operation below
	if (res) {
		resolve("Resolved!");
	} else {
		reject(Error("It was a valiant effort... but no."));
	}
});

Promise.all([promise]).then((res) => console.log(res));
