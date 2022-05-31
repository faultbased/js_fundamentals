add = (num) => {
    return num + 7;
 }

function multi (x, y) {
    return x * y;
}

function cap (nocap) {
   return nocap.charAt(0).toUpperCase() + nocap.slice(1);
   
}

minus = (neg) => {
    return neg.slice(-1)
}

console.info(minus("earth"));

console.info(cap("write"));

console.info(multi(2, 3));

console.info(add(7));

