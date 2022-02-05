let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
	cupsAdded = cupsAdded +1;
		if (cupsAdded !== cupsOfSugarNeeded) {
			console.log(`It needs ${cupsOfSugarNeeded}`);
		} else {
			console.log(`Good job... all I wanted was ${cupsAdded} of sugar.`)
		};
} while (cupsAdded < cupsOfSugarNeeded);