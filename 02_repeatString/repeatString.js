const repeatString = function (string, num) {
    let repeatedString = "";
    if (num >= 0) {
        for (let i = 1; i <= num; i++) {
            repeatedString += string;
        }
    } else {
        return 'ERROR';
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
