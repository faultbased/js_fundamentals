let result = true;

const abc = () => {
  return new promise((resolve, reject) => {
    if (result !== true) {
      resolve("So you think you can dance?");
    } else {
      reject("So you think you can outrun my bullets?");
    }
  });
};

/*function abc() {
  return new promise((resolve, reject) => {
    if (result = true) {
      resolve('totally ok, OK?');
    } else {
      reject('Not trippin\', OK?');
    }
  };*/

async function kitchen() {
  console.log("Earth Mail..");

  try {
    await abc;
    console.log();
  } catch (error) {
    console.log("won't you come play aaaaaabbbbbcccc", error);
  } finally {
    console.log("runs code somewhat...");
  }
}

kitchen();
