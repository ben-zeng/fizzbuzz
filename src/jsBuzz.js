function JsBuzz() {
}

JsBuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0 ? true : false
};

JsBuzz.prototype.isDivisibleByFive = function(number) {
  return number % 5 === 0 ? true : false
};

JsBuzz.prototype.isDivisibleByFifteen = function(number) {
  return number % 15 === 0 ? true : false
};
