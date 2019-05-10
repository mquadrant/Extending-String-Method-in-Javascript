//hasvowel return true if the string contain a vowel
String.prototype.hasVowel = function () {
    return /[aeiou]/.test(this);
}

//toUpper return the string in capital case
String.prototype.toUpper = function () {
    return this.replace(/[a-z]/g, function (str) {
        return String.fromCharCode(str.charCodeAt(0) - 32);
    });
}

//toLower return the string in lower case
String.prototype.toLower = function () {
    return this.replace(/[A-Z]/g, function (str) {
        return String.fromCharCode(str.charCodeAt(0) + 32);
    });
}

//ucFirst return the string with the first character in Upper case
String.prototype.ucFirst = function () {
    return this.replace(/[A-Za-z]/, (str) => str.toUpper());
}

String.prototype.isQuestion = function (){
    return /\?$/.test(this);
}

String.prototype.words = function (){
    return this.match(/\w+/g);
}

module.exports = String.prototype;