const ftoc = function(fahrenheit) {
  const cel = (fahrenheit - 32) * 5/9;
  return parseFloat(cel.toFixed(1));
};

const ctof = function(celsius) {
  const fah = (celsius * 9/5) + 32;
  return parseFloat(fah.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
