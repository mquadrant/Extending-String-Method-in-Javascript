# extending-string-methods-in-javascript
In this project, some string methods are added to the built-in string methods through the String prototype in Javascript. Also include test cases that were perform on these methods.

### Project Description
The String class in Javascript is extend. Using Prototype Oriented Programming, methods, procedures and instance attributes are added to the String class to support more string manipulation features. 

##### Listed below is a list of the methods that are added to the string class:

* `hasVowels` (typeof Boolean): Returns true if the string contains vowels. This method uses Regular Expression.

* `toUpper` (typeof String): Returns the String in question but with all characters in upper cases as applicable. This method is implemented using Regex.

* `toLower` (typeof String): Returns the String in question but with all characters in their lower cases as applicable. This method is implemented using Regex.
 
* `ucFirst` (typeof String): Returns the String in question but changes the First Character to an Upper case.

* `isQuestion` (typeof Boolean): Return true if the string is a question (ending with a question mark). This method implements Regular Expression.

* `words`: Returns a list of the words in the string, as an Array. This method implements Regular Expression.

* `wordCount` (typeof Number): Returns the number of words in the string.

* `toCurrency` (typeof String): Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.

* `fromCurrency` (typeof Number): Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11

* `inverseCase` (typeof String): Returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.

* `alternatingCase` (typeof String): Returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.

* `numberWords` (typeof String): Returns the numbers in words e.g 325 should return three two five.

* `isDigit`  (typeof Boolean): Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false. This method implements Regular Expression.

> `**Note**`: This project is completed using ES5

### Test Coverage
- All the prototyped methods are covered fully with tests
- The tests cover the methods as well as the conditions/procedures that the methods employed
- All the comparators used for the tests are optimized or most efficient comparator for the scenario
