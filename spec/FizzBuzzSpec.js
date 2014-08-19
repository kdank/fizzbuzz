describe("FizzBuzz", function() {
  describe("When the number is divisable by three but not five", function() {
    it("returns the string 'fizz'", function() {
      expect(fizzBuzz(6)).toEqual("fizz");
    });
  });

  describe("When the number is divisable by five but not three", function() {
    it("returns the string 'buzz'", function() {
      expect(fizzBuzz(10)).toEqual("buzz");
    });
  });

  describe("When the number is divisable by three AND five", function() {
    it("returns the string 'buzz'", function() {
      expect(fizzBuzz(15)).toEqual("fizzbuzz");
    });
  });

  describe("When the number is divisable by neither three NOR five", function() {
    it("returns the string 'buzz'", function() {
      expect(fizzBuzz(7)).toEqual(7);
    });
  });
});
