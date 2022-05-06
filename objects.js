const person1 = {
	firstName: "Joffery",
	lastName: "Barfly",
	email: "joff@barstool.com",
};

const person2 = {
	// key-value pairing; keys on left, value on right
	firstName: "Dean",
	lastName: "Winchester",
	email: "win@devilhorn.com",
};

//since you can't return multi values, you can wrap them in another object to be returned
const getEmailAndlastName = () => {
	return {
		email: person2.email,
		lastName: person2.lastName,
	};
};


let read = () => {
	console.info(getEmailAndlastName());
};

//outputs the key-value pairs of the wrapped up object content; 


read();
