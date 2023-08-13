function isEmptyObj(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

function calSalaries(object) {
    if (isEmptyObj(object)) {
        return 0;
    }
    
    let sum = 0;
    
    for (let key in object) {
        sum += object[key];
    }
    
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let total = calSalaries(salaries);
console.log(total);
