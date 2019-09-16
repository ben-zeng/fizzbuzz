describe("JsBuzz", function() {

  beforeEach(function() {
    jsbuzz = new JsBuzz();
  });

  describe('returns true when a number is divisable...', function() {
    it ("by 3", function() {
    jsbuzz = new JsBuzz();
    expect(jsbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it ("by 5", function() {
    jsbuzz = new JsBuzz();
    expect(jsbuzz.isDivisibleByFive(10)).toBe(true);
    });

    it ("by 15", function() {
    jsbuzz = new JsBuzz();
    expect(jsbuzz.isDivisibleByFifteen(30)).toBe(true);
    });
  });

  describe('returns false when a number is not divisable...', function() {
    it ("by 3", function() {
    jsbuzz = new JsBuzz();
    expect(jsbuzz.isDivisibleByThree(8)).toBe(false);
    });

    it ("by 5", function() {
    jsbuzz = new JsBuzz();
    expect(jsbuzz.isDivisibleByFive(8)).toBe(false);
    });

    it ("by 15", function() {
    jsbuzz = new JsBuzz();
    expect(jsbuzz.isDivisibleByFifteen(16)).toBe(false);
    });
  });

});
