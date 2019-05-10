describe("Test for hasVowel() method in the String Prototype", () => {
    it("should return 'true' if the string contains vowels", () => {
        var result = "Going home".hasVowel();
        expect(result).toBeTruthy();
    });
});

describe("Test for toUpper() method in String Prototype", () => {
    it("should return the passed-in string with all characters in upper cases", () => {
        var result = "Going 3467 home".toUpper();
        expect(result).toMatch("GOING 3467 HOME");
    });
});

describe("Test for toLower() method in String Prototype", () => {
    it("should return the passed-in string with all characters in lower cases", () => {
        var result = "GoinG 3467 hoMe".toLower();
        expect(result).toMatch("going 3467 home");
    });
});

describe("Test for ucFirst() method in String Prototype", () => {
    it("should return the passed-in string with all the First Character change to Upper case", () => {
        var result = "house is good".ucFirst();
        expect(result).toMatch("House is good");
    });
});

describe("Test for isQuestion() method in String Prototype", () => {
    it("should return 'true' if the string is a question (ending with a question mark).", () => {
        var result = "Is he coming back?".isQuestion();
        expect(result).toBeTruthy();
    });
});

describe("Test for words() method in String Prototype", () => {
    it("should return a list of the words in the string, as an Array.", () => {
        var result = "Javascript is a programming language.".words();
        expect(result).toMatch(['Javascript', 'is', 'a', 'programming', 'language']);
    });
});