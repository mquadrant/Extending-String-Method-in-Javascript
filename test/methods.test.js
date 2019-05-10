describe("Test for hasVowel method in the String Prototype", () => {
    it("should returns 'true' if the string contains vowels", () => {
        var result = "Going home".hasVowel();
        expect(result).toBeTruthy();
    });
});

describe("Test for toUpper method in String Prototype Returns the String", () => {
    it("should returns the passed-in string with all characters in upper cases", () => {
        var result = "Going 3467 home".toUpper();
        expect(result).toMatch("GOING 3467 HOME");
    });
});