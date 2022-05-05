try {
    let hello = prompt ("Type Whatever").toLowerCase();
    if (hello !== "whatever") {
        throw new Error ("Good job, directions are a foreign concept to you.")
    }
} catch (e) {
    //e.message calls the throw new error msg or use name to just call "error" name
    alert(e.message)
};