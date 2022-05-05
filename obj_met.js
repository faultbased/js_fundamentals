const engine = {
	//methods can be made using shorthand or anon arrow functions

.1	//method shorthand, w/ one argument
	start(adverb) {
		console.info(`The engine starts up ${adverb}!`);
	},
	//anon arrow function w/o argument(s)
	sputter: () => {
		console.info("The engine then sputters?");
	},
};

//invoke syntax: objectName.methodName(arguments);
engine.start("with ...vigor");
engine.sputter();
