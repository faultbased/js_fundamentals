let order = (call_production) => {
  console.log("order filled, get it over to production!");

  setTimeout(() => {
    call_production();
  }, 10000);
};

setTimeout(() => {
  let production = () => {
    console.log("production has started");
  };

  console.log(order(production));
}, 500);
