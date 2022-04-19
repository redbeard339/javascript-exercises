const sumAll = function (a, b) {
    let sum = 0;
    let larger = 0;
    let smaller = 0;

    if (a > b) {
        larger = a;
        smaller = b;
    } else {
        larger = b;
        smaller = a;
    }

    if ((a < 0 || b < 0) || 
        (typeof a === 'string' || typeof b === 'string') ||
        (isNaN(a) || isNaN(b))) {
        return 'ERROR';
    } else {
        for (let i = smaller; i <= larger; i++) {
            sum += i;
        }
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
