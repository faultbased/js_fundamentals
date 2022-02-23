console.log("I");
//setTimeout 'defers' the console log for 400ms using an arrow function expression
setTimeout(() => {
  console.log("Care!");
}, 400);
//the console log below will log before the the previous!
console.log("don't");
