const origNum = 25;
const origObj = { color: "Earth Soylent Green" };

const changeItUp = (num, obj) => {
	num = 46;
	obj.color = "Firebrand Yellow-Red";
};

changeItUp(origNum, origObj);

console.info(origNum);
console.info(origObj.color);
console.info(changeItUp().num);
