const testLuck = new Promise((resolve, reject) => {
    if (Math.random() < 0.3) {
        resolve('Winner, winner... Turkey and Cheese Baguette')
    } else {
        reject(new Error('Mediocre'))
    }
});

