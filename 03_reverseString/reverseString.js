const reverseString = function(string) {
    const splitString = string.split("");
    let reversedString = [];
    for(let i = splitString.length; i >= 0; i--){
      reversedString.push(splitString[i])
    }
    return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
