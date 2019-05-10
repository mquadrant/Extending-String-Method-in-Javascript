describe("Test for hasVowel() method in the String Prototype", () => {
    it("should returns 'true' if the string contains vowels", () => {
        var result = "Going home".hasVowel();
        expect(result).toBeTruthy();
    });
});

describe("Test for toUpper() method in String Prototype", () => {
    it("should returns the passed-in string with all characters in upper cases", () => {
        var result = "Going 3467 home".toUpper();
        expect(result).toMatch("GOING 3467 HOME");
    });
});

describe("Test for toLower() method in String Prototype", () => {
    it("should returns the passed-in string with all characters in lower cases", () => {
        var result = "GoinG 3467 hoMe".toLower();
        expect(result).toMatch("going 3467 home");
    });
});

describe("Test for ucFirst() method in String Prototype", () => {
    it("should returns the passed-in string with all the First Character change to Upper case", () => {
        var result = "house is good".ucFirst();
        expect(result).toMatch("House is good");
    });
});