let i = 0;
for (i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.info('FizzBuzz');
  } else if (i % 3 == 0) {
    console.info('Buzz');
  } else if (i % 5 == 0) {
    console.info('Buzz');
  } else {
    console.info(i);
  }
};