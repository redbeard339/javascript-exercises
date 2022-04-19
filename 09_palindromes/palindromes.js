const palindromes = function (string) {
    const re = /[\W_]/g;

    const str = string.replace(re, "").toLowerCase();
    console.log(str);
    const newStr = str.split("").reverse().join("")
    console.log(newStr);

    if (newStr === str) {
        return true;
    } else {
        return false;
    }

}

// Do not edit below this line
module.exports = palindromes;
