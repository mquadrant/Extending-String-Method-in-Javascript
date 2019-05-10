describe("Test for hasVowel() method in the String Prototype", () => {
    it("should return 'true' if the string contains vowels", () => {
        var result = "Going home".hasVowel();
        expect(result).toBeTruthy();
    });
});

describe("Test for toUpper() method in String Prototype", () => {
    it("should return the passed-in string with all characters in upper cases", () => {
        var result = "Going 3467 home".toUpper();
        expect(result).toEqual("GOING 3467 HOME");
    });
});

describe("Test for toLower() method in String Prototype", () => {
    it("should return the passed-in string with all characters in lower cases", () => {
        var result = "GoinG 3467 hoMe".toLower();
        expect(result).toEqual("going 3467 home");
    });
});

describe("Test for ucFirst() method in String Prototype", () => {
    it("should return the passed-in string with all the First Character change to Upper case", () => {
        var result = "house is good".ucFirst();
        expect(result).toEqual("House is good");
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
        expect(result).toEqual(['Javascript', 'is', 'a', 'programming', 'language']);
    });
});

describe("Test for wordCount() method in String Prototype", () => {
    it("should return the number of words in the string", () => {
        var result = "Javascript is a programming language.".wordCount();
        expect(result).toBe(5);
    });
});

describe("Test for toCurrency() method in String Prototype", () => {
    it("should return a currency representation of the String", () => {
        var result = "11111.11".toCurrency();
        expect(result).toEqual('11,111.11');
    });
});

describe("Test for fromCurrency() method in String Prototype", () => {
    it("should return a number representation of the Currency String", () => {
        var result = "11,111.11".fromCurrency();
        expect(result).toBeCloseTo(11111.11);
    });
});

describe("Test for inverseCase() method in String Prototype", () => {
    it("should return each letter in the string as an inverse of its current case", () => {
        var result = "Mr. Ben".inverseCase();
        expect(result).toEqual('mR. bEN');
    });
});

describe("Test for alternatingCase() method in String Prototype", () => {
    it("should return the letters in alternating cases. It must start with a lower case", () => {
        var result = "Onomatopoeia".alternatingCase();
        expect(result).toEqual('oNoMaToPoEiA');
    });
});

describe("Test for numberWords() method in String Prototype", () => {
    it("should return the numbers in words.", () => {
        var result = new Number(325).numberWords();
        expect(result).toEqual('three two five');
    });
});