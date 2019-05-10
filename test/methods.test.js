describe("Test for hasVowel method in the String Prototype", () => {
    it("should returns 'true' if the string contains vowels", () => {
        var result = "Going home".hasVowel();
        expect(result).toBeTruthy();
    });
});