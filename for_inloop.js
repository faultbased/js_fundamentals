let mobile = {
	brand: "Samsung",
	model: "Galaxy S45AF",
};

//loops and prints to the console each key:value pair once per line
for (let key in mobile) {
	console.info(`${key}: ${mobile[key]}`);
}
