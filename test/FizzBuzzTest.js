describe("FizzBuzz", () => {
    describe("of", () => {
        it("0 is 0", () => {
            expect(FizzBuzz.of(0)).toBe(0);
        });
        
        it("1 is 1", () => {
            expect(FizzBuzz.of(1)).toBe(1);
        });
        
        it("3 is 'Fizz", () => {
            expect(FizzBuzz.of(3)).toBe('Fizz');
        });
        
        it("5 is 'Buzz'", () => {
            expect(FizzBuzz.of(5)).toBe('Buzz');
        });
        
        it("6 is 'Fizz", () => {
            expect(FizzBuzz.of(6)).toBe('Fizz');
        });
        
        it("10 is 'Buzz", () => {
            expect(FizzBuzz.of(10)).toBe('Buzz');
        });
        
        it("15 is 'FizzBuzz", () => {
            expect(FizzBuzz.of(15)).toBe('FizzBuzz');
        });
    });
});