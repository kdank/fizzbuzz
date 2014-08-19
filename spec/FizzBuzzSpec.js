describe("FizzBuzz", function() {
  var fizzbuzz = new FizzBuzz();

  beforeEach(function() {
    fizzbuzz.salutation = jasmine.createSpy().and.returnValue('Hello Stranger');
  });

  it("calls salutation", function() {
    fizzbuzz.perform(55)
    expect(fizzbuzz.salutation).toHaveBeenCalled();
  });

  describe("When the number is divisable by three but not five", function() {
    it("returns the string 'fizz'", function() {
      expect(fizzbuzz.perform(6)).toEqual("Hello Stranger fizz");
    });
  });

  describe("When the number is divisable by five but not three", function() {
    it("returns the string 'buzz'", function() {
      expect(fizzbuzz.perform(10)).toEqual("Hello Stranger buzz");
    });
  });

  describe("When the number is divisable by three AND five", function() {
    it("returns the string 'buzz'", function() {
      expect(fizzbuzz.perform(15)).toEqual("Hello Stranger fizzbuzz");
    });
  });

  describe("When the number is divisable by neither three NOR five", function() {
    it("returns the string 'buzz'", function() {
      expect(fizzbuzz.perform(7)).toEqual("Hello Stranger 7");
    });
  });
});
