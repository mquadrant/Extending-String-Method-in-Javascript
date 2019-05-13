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

String.prototype.isQuestion = function () {
    return /\?$/.test(this);
}

String.prototype.words = function () {
    return this.match(/\w+/g);
}

String.prototype.wordCount = function () {
    return this.words().length;
}

String.prototype.toCurrency = function () {
    var separate = this.split('.');
    separate[0] = separate[0].replace(/\B(?=(?:\d{3})+$)/g, ',');
    return separate.join('.');
}

String.prototype.fromCurrency = function () {
    return parseFloat(this.replace(/(,)(?!.*[a-zA-Z])/g, ''));
}

String.prototype.inverseCase = function () {
    return this.replace(/[A-Za-z]/g, function(str){
        return str>='a'?str.toUpper():str.toLower()});
}

String.prototype.alternatingCase = function () {
    if(/[^A-Za-z]/g.test(this)){
        return "invalid input. All must be alphabet!";
    }else{
        return this.replace(/[A-Za-z](?!.*[0-9])/g,function(str,offset){
            return offset%2 === 0?str.toLower():str.toUpper();
        });
    }
}

module.exports = String.prototype;