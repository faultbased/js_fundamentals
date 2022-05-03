const testLuck = new Promise((resolve, reject) => {
    if (Math.random() < 0.4) {
        resolve('Winner, winner... Turkey and Cheese Baguette')
    } else {
        reject(new Error('Mediocre'))
    }
});

//anon arrow func .then and .catch logs the resolved value of the promise via console.info
testLuck.then(shrug => {
  console.info(shrug)
}).catch (error => {
    console.error(error)
});