var FizzBuzz = function() {};

FizzBuzz.prototype.perform = function(number) {
    return this.salutation() + " " + this.caclulate(number);
};

FizzBuzz.prototype.caclulate = function(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzbuzz';
  } else if (number % 3 === 0) {
    return 'fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  } else {
    return number;
  }
};

FizzBuzz.prototype.salutation = function() {
    return "Greetings, This is your answer:";
};
