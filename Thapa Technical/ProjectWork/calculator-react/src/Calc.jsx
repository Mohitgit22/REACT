
function add(a,b) {
    let sum = a+b;
    return sum;
}

function sub(a,b) {
    let diff = a-b;
    return diff;
}

function div(a,b) {
    let division = a/b;
    division=division.toFixed(2)
    return division;
}

function mult(a,b) {
    let product = a*b;
    return product;
}

export {add,sub,div,mult} ;