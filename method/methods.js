//hasvowel return true if the string contain a vowel
String.prototype.hasVowel = function(){
    return /[aeiou]/.test(this);
}

//toUpper return the string in capital case
String.prototype.toUpper = function(){  
    return this.replace(/[a-z]/g, function(str){
        return String.fromCharCode(str.charCodeAt(0) - 32);
    });
}

//toLower return the string in lower case
String.prototype.toLower = function(){
    return this.replace(/[A-Z]/g,function(str){
        return String.fromCharCode(str.charCodeAt(0) + 32);
    });
}

module.exports = String.prototype;