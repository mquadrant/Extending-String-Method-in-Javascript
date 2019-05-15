//hasvowel return true if the string contain a vowel
String.prototype.hasVowel = function () {
    //create a regular expression that matches all vowel both capital and small letter.
    var regex = /[aeiouAEIOU]/;
    return regex.test(this);
}

//toUpper return the string in capital case
String.prototype.toUpper = function () {
    //the replace method takes in a regex parameter that matches all small letter in the string
    return this.replace(/[a-z]/g, function (string) {
        //substracting 32 from the base 10 of the passed character string would produce the lower case equivalent.
        //And then convert resulting base 10 back to character.
        return String.fromCharCode(string.charCodeAt(0) - 32);
    });
}

//toLower return the string in lower case
String.prototype.toLower = function () {
    //the replace method takes in a regex parameter that matches all capital letter in the string
    return this.replace(/[A-Z]/g, function (string) {
        //Adding 32 to the base 10 of the passed capital letter would produce the lower case equivalent.
        //And then convert resulting base 10 back to character.
        return String.fromCharCode(string.charCodeAt(0) + 32);
    });
}

//ucFirst return the string with the first character in Upper case
String.prototype.ucFirst = function () {
    //the replace method takes in a regex parameter that matches all capital letter and small letter in the string
    return this.replace(/[A-Za-z]/, function (string) { 
        return string.toUpper()});
}

//isQuestion return either true or false if the string is a question
String.prototype.isQuestion = function () {
    //create a regular expression that matches question mark at the end of the string
    var regex = /\?$/;
    return regex.test(this);
}

String.prototype.words = function () {
    return this.match(/\b[\w-]+\b/g);
}

String.prototype.wordCount = function () {
    return this.words().length;
}

Number.prototype.toCurrency = function () {
    var separate = this.toString().split('.');
    separate[0] = separate[0].replace(/\B(?=(?:\d{3})+$)/g, ',');
    return separate.join('.');
}

String.prototype.fromCurrency = function () {
    return parseFloat(this.replace(/(,)(?!.*[a-zA-Z])/g, ''));
}

String.prototype.inverseCase = function () {
    return this.replace(/[A-Za-z]/g, function (str) {
        return str >= 'a' ? str.toUpper() : str.toLower()
    });
}

String.prototype.alternatingCase = function () {
        let count = 1;
    return this.replace(/[A-Za-z]/g, function (str) {
                count++;
                return count % 2 === 0 ? str.toLower() : str.toUpper();
    });
}

Number.prototype.numberWords = function () {
    return (this.toString()).replace(/\d/g, function (str) {
        switch(str.toLower()){
            case '1': return "one ";
            case '2': return "two ";
            case '3': return "three ";
            case '4': return "four ";
            case '5': return "five ";
            case '6': return "six ";
            case '7': return "seven ";
            case '8': return "eight ";
            case '9': return "nine ";
            case '0': return "zero ";
        }
    });
}

Number.prototype.isDigit = function () {
    return /^\d$/.test(this);
}

module.exports = String.prototype;
