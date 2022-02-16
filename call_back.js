
let order = (call_production) => {
  console.log("order filled, get it over to production!");

call_production();
};

let production = () => {
  console.log("production has started");
};

console.log(order(production));
