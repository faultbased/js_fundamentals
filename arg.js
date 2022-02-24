const origNum = 4;
const origObj = { size: "medium" };
=
const changeItup = (num, obj) => {
	num = 15;
	obj.size = "large";
};

changeItup(origNum, origObj);

console.log(origNum.);
console.log(origObj.size);
