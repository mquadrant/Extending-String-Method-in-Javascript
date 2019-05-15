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
    //create a regular expression that matches all word character set with non-word character boundary 
    var regex = /\b[\w-]+\b/g;
    return this.match(regex);
}

String.prototype.wordCount = function () {
    return this.words().length;
}

Number.prototype.toCurrency = function () {
    //converting number to string and splitting it at '.'
    var separate = this.toString().split('.');
    //create a pattern that matches set of three consecutive digit and that is bounded at the left by a word character 
    //and also do not involve in the consumption of character
    var regex = /\B(?=(?:\d{3})+$)/g;
    separate[0] = separate[0].replace(regex, ',');
    return separate.join('.');
}

String.prototype.fromCurrency = function () {
    //create a regular expression that matches every ',' and doesnt match when there is alphabet
    var regex = /(,)(?!.*[a-zA-Z])/g;
    return parseFloat(this.replace(regex, ''));
}

String.prototype.inverseCase = function () {
    //create a pattern that matches both capital and small letter.
    var regex = /[A-Za-z]/g;
    return this.replace(regex, function (string) {
        //change small letter to capital letter and vice-versa
        return string >= 'a' ? string.toUpper() : string.toLower()
    });
}

String.prototype.alternatingCase = function () {
        let count = 1;
        //create a pattern that matches both capital and small letter.
        var regex = /[A-Za-z]/g;
    return this.replace(regex, function (string) {
                count++;
                // changing every alphabet on even position to lower case and odd to uppercase
                return count % 2 === 0 ? string.toLower() : string.toUpper();
    });
}

Number.prototype.numberWords = function () {
    var numberWord = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    var word = [];
    //create a pattern that matches all digits
    var regex = /\d/g;
    while(index = regex.exec(this)){
        word.push(numberWord[index]);
    }
    return word.join(' ');
}

Number.prototype.isDigit = function () {
    return /^\d$/.test(this);
}

module.exports = String.prototype;
