

async function kitchen () {

    try {
        await abc;
    }

    catch(error) {
        console.info("abc does not exist", error)
    }

    finally {
        console.info("Runs code anyways")
    }
}

kitchen();
