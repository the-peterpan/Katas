//ARE THEY THE SAME?
/*
https://www.codewars.com/kata/550498447451fbbd7600041c
Given two numStrs a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two numStrs have the "same" 
elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
*/
let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
//Returns true

let c = [69, 14, 37, 19];
let d = [4761, 196, 1369, 362];

function comp(numStr1, numStr2) {
  if (numStr1 === null || numStr2 === null) return false;
  let sorted1 = numStr1.sort((a, b) => a - b);
  let sorted2 = numStr2.sort((a, b) => a - b);
  for (i = 0; i < sorted1.length; i++) {
    if (sorted1[i] * sorted1[i] !== sorted2[i]) {
      return false;
    }
  }
  return true;
}

function comp2(numStr1, numStr2) {
  if (numStr1 == null || numStr2 == null) return false;
  numStr1.sort((a, b) => a - b);
  numStr2.sort((a, b) => a - b);
  return numStr1.map((v) => v * v).every((v, i) => v == numStr2[i]);
}
// console.log(comp2(c, d));

//numStr.DIFF
/*
https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
Your goal in this kata is to implement a difference function, which subtracts one 
list from another and returns the result.
It should remove all values from list a, which are present in list b.
numStrDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
numStrDiff([1,2,2,2,3],[2]) == [1,3]
*/
function numStrDiff(a, b) {
  for (let i = 0; i <= a.length; i++) {
    b.forEach((el) => {
      if (el === a[i]) {
        a.splice(i, 1);
        i--;
      }
    });
  }
  return a;
}

function numStrDiff2(a, b) {
  let filtered = [];
  a.filter((e) => {
    if (!b.includes(e)) filtered.push(e);
  });
  return filtered;
}

function numStrDiff3(a, b) {
  return a.filter((e) => !b.includes(e));
}

function numStrDiff4(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) == -1;
  });
}
// console.log(numStrDiff4([1, 2, 2, 2, 3], [2]));

//COUNT CHARACTERS IN YOUR STRING
//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

myString = "aba"; // { a: 2, b: 1 });

function count(string) {
  console.log(2);
  let strArr = string.split("");
  let object = {};
  strArr.forEach(function (letter) {
    if (object[letter]) {
      object[letter]++;
    } else {
      object[letter] = 1;
    }
    return object;
  });
  return object;
}
// count(myString);

//BACKSPACES IN STRING
/*
https://www.codewars.com/kata/backspaces-in-string/train/javascript
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
Your task is to process a string with "#" symbols.
Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/
function cleanString(s) {
  let sArr = [...s];
  for (i = 0; i < sArr.length; i++) {
    if (sArr[i] === "#" && i === 0) {
      sArr.splice(i, 1);
      i--;
    }
    if (sArr[i] === "#" && i !== 0) {
      sArr.splice(i - 1, 2);
      i -= 2;
    }
  }
  return sArr.join("");
}

cleanString2 = (s) =>
  s.split("").reduce((r, e) => (e == "#" ? r.slice(0, -1) : r + e), "");

// console.log(cleanString2("abc####d##c#"));

//BUILD TOWER
//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).
Tower block is represented as *
for example, a tower of 3 floors looks like below
[
  '  *  ',
  ' *** ',
  '*****' 
]
and a tower of 6 floors looks like below
[
  '     *     ',  //0 index: 1 star
  '    ***    ', //1 index: 3 stars
  '   *****   ', //2: 5 stars
  '  *******  ', //3: 7 stars
  ' ********* ', //4: 9 stars
  '***********' //5: 11 stars
]
*/
function towerBuilder(nFloors) {
  let towernumStr = [];
  let star = "*";
  for (i = 0; i < nFloors; i++) {
    towernumStr[i] = star.repeat(2 * i + 1);
    let space = " ".repeat(nFloors - i - 1);
    let spacesLeftWithTower = space.concat(towernumStr[i]);
    towernumStr[i] = spacesLeftWithTower + space;
  }
  return towernumStr;
}

const towerBuilder2 = (n) =>
  [...numStr(n)].map((curVal, i) => {
    curVal =
      " ".repeat(n - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(n - i - 1);
    return curVal;
  });
//Above refactored:
const towerBuilder3 = (n) =>
  [...numStr(n)].map(
    (_, i) =>
      " ".repeat(n - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(n - i - 1)
  );
// console.log(towerBuilder2(5));

//CONVERT STRING TO CAMEL CASE
//www.codewars.com/kata/517abf86da9663f1d2000003
/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).
Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str) {
  let strArr = [];
  if (str.includes("-")) strArr = str.split("-");
  if (str.includes("_")) strArr = str.split("_");
  for (i = 1; i < strArr.length; i++) {
    firstLetter = strArr[i].charAt(0).toUpperCase();
    strArr[i] = firstLetter + strArr[i].slice(1, strArr[i].length);
  }
  return strArr.join("");
}

function toCamelCase2(str) {
  let strArr = str.split(/-|_/g);
  let result = [];
  strArr.slice(1).map((word) => {
    result += word.charAt(0).toUpperCase() + word.slice(1);
  });
  return strArr[0] + result;
}

function toCamelCase3(str) {
  return str
    .split(/-|_/g)
    .map(
      (w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)
    )
    .join("");
}
// console.log(toCamelCase3("The_stealth_warrior"));

//COUNT CHARACTERS IN YOUR STRING
/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
The main idea is to count all the occurring characters(UTF-8) in string. 
If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
What if the string is empty ? Then the result should be empty object literal { }
*/

//for loop
function count(string) {
  let result = {};
  strArr = [...string];
  for (i = 0; i < strArr.length; i++) {
    if (result.hasOwnProperty(strArr[i])) {
      result[strArr[i]]++;
    } else result[strArr[i]] = 1;
  }
  return result;
}

//forEach
function count2(string) {
  let result = {};
  [...string].forEach((el) => {
    if (result[el]) result[el]++;
    else result[el] = 1;
  });

  return result;
}

//reduce
const count3 = (s) => {
  const numStr = s.split("");
  const result = numStr.reduce((acc, val) => {
    if (val in acc) {
      console.log(val, acc, acc[val]);
      return { ...acc, [val]: acc[val] + 1 };
    } else {
      return { ...acc, [val]: 1 };
    }
  }, {});
  return result;
};
// console.log(count3("ssseee"));

//COUNT LETTERS IN STRING
//https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript
/*
In this kata, you've to count lowercase letters in a given string and return the letter
count in a hash with 'letter' as key and count as 'value'. The key must be
'symbol' instead of string in Ruby and 'char' instead of string in Crystal.
EG: letterCount('arithmetics') #=> {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}
*/
function letterCount(str) {
  let counter = 0;
  let result = {};
  [...str].forEach((letter) => {
    console.log(letter);
    if (result[letter]) result[letter]++;
    else result[letter] = 1;
  });

  return result;
}

letterCount2 = (str) =>
  [...str].reduce((acc, val) => {
    acc[val] = acc[val] ? acc[val] + 1 : 1;
    return acc;
  }, {});
// console.log(letterCount2("codewwwarsss"));

//TWO SUM
//https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
/*
Write a function that takes an numStr of numbers (integers for the tests) and a target
number. It should find two different items in the numStr that, when added together, give
the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).
*/
let arr = [1, 2, 3];
let target = 4; //answer: (0, 2)

function twoSum(numbers, target) {
  for (number of numbers) {
    for (let i = 1; i < numbers.length; i++) {
      if (number + numbers[i] === target) {
        return [numbers.indexOf(number), i];
      }
    }
  }
}
const twoSum2 = (numbers, target) => {
  let secondIndex;
  for (let i = 0; i < numbers.length; i++) {
    secondIndex = numbers.indexOf(target - numbers[i], i + 1);
    if (secondIndex > -1) return [i, secondIndex];
  }
};
//Solution with object as hash table
const twoSum3 = (numbers, target) => {
  const numsIndices = {};
  numbers.forEach((el, index) => (numsIndices[el] = index));
  for (let i = 0; i < numbers.length; i++) {
    const difference = target - numbers[i];
    if (numsIndices[difference] !== undefined) {
      return [i, numsIndices[difference]];
    }
  }
};
// console.log(twoSum3(arr, target));

//Find The Parity Outlier
/*
https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
You are given an numStr (which will have a length of at least 3, but could be very large) containing integers. 
The numStr is either entirely comprised of odd integers or entirely comprised of even integers except for a single 
integer N. Write a method that takes the numStr as an argument and returns this "outlier" N.
Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier(integers) {
  let outlier;
  let evenIntegers = [];
  integers.forEach((number) => {
    if (number % 2 === 0) evenIntegers.push(number);
  });
  if (evenIntegers.length === 1) outlier = evenIntegers[0];
  else outlier = integers.filter((number) => number % 2 !== 0)[0];

  return outlier;
}

const findOutlier2 = (a) => {
  let odds = [];
  let evens = [];
  for (let num of a) {
    num % 2 === 0 ? evens.push(num) : odds.push(num);
  }
  return odds.length > 1 ? evens[0] : odds[0];
};
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); //160

//MAGIC THE GATHERING #1 CREATURES
/*
https://www.codewars.com/kata/567af2c8b46252f78400004d/train/javascript
*/
player1 = [
  [1, 1],
  [2, 1],
  [2, 2],
  [5, 5],
];
player2 = [
  [1, 2],
  [1, 2],
  [3, 3],
];
//Result:
//{ 'player1': [[5, 5]],
//  'player2': [[1, 2], [3, 3]] }

function battle(player1, player2) {
  let length = 0;
  player1.length > player2.length
    ? (length = player1.length)
    : (length = player2.length);
  const deliverDamage = 0;
  const toughness = 1;
  let player1Survivors = [];
  let player2Survivors = [];

  for (i = 0; i < length; i++) {
    if (!player1[i]) {
      player2Survivors.push(player2[i]);
      continue;
    }
    if (!player2[i]) {
      player1Survivors.push(player1[i]);
      continue;
    }

    if (player1[i][toughness] > player2[i][deliverDamage]) {
      player1Survivors.push(player1[i]);
    }
    if (player2[i][toughness] > player1[i][deliverDamage]) {
      player2Survivors.push(player2[i]);
    }
  }
  return { player1: player1Survivors, player2: player2Survivors };
}
// console.log(battle(player1, player2));

//PERSISTENT BUGGER
/*
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
Write a function, persistence, that takes in a positive parameter num and returns its
multiplicative persistence, which is the number of times you must multiply the digits
in num until you reach a single digit.
For example:
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
 persistence(4) === 0 // because 4 is already a one-digit number
*/

function persistence(num) {
  if (num <= 9 && num > 0) return 0;
  let sum = 1;
  let numStr = num.toString();
  let counter = 0;
  do {
    for (i = 0; i < numStr.length; i++) {
      sum = sum * numStr[i];
    }
    numStr = sum.toString();
    sum = 1;
    counter += 1;
  } while (numStr.length > 1);
  return counter;
}

function persistence2(num) {
  let counter = 0;
  while (num.toString().length > 1) {
    num = num.toString().split("");
    num = num.reduce((acum, currentValue) => {
      return acum * currentValue;
    });
    counter++;
  }
  return counter;
}
// console.log(persistence2(999));

//STRING SUBPATTERN RECOGNITION
/*
https://www.codewars.com/kata/5a49f074b3bfa89b4c00002b
In this kata you need to build a function to return either true/True or false/False if a string can be seen as 
the repetition of a simpler/shorter subpattern or not.
hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
*/
function hasSubpattern(string) {
  if (string.length === 1) return false;
  for (i = 0; i < string.length / 2; i++) {
    let aux = string.slice(0, i + 1).repeat(string.length / (i + 1));
    if (aux === string) return true;
  }
  return false;
}

function hasSubpattern2(string) {
  if (string.length === 1) return false;
  let i = 0;
  do {
    let subString = string.substring(0, i + 1).repeat(string.length / (i + 1));
    if (string === subString) return true;
    i++;
  } while (i < string.length / 2);
  return false;
}

function hasSubpattern3(string) {
  return (string + string).indexOf(string, 1) != string.length;
}
// console.log(hasSubpattern3("bGbG"));

//QUEUE TIME
/*
https://www.codewars.com/kata/57b06f90e298a7b53d000a86

There is a queue for the self - checkout tills at the supermarket.
Your task is write a function to calculate the total time required for all the customers to check out!
input:
customers: an array of positive integers representing the queue.Each integer represents a customer,
    and its value is the amount of time they require to check out.
        n: a positive integer, the number of checkout tills.

output:
The function should return an integer, the total time required.
queueTime([5, 3, 4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times
queueTime([10, 2, 3, 3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.
queueTime([2, 3, 10], 2)
// should return 12
*/

const queueTime = (line, registers) => {
  let result = [];
  for (let i = 0; i < registers; i++) {
    result.push(0);
  }
  // another way to create the array:
  // const result = Array(registers).fill(0)
  for (let i = 0; i < line.length; i++) {
    result[0] += line[i];
    result.sort((a, b) => a - b);
  }
  return result[result.length - 1];
};

// checking for the lowest number instead of sorting the array
const queueTime2 = (customers, n) => {
  if (customers == "") return 0;
  let aux = customers.splice(0, n);
  for (let i = 0; i < customers.length; i++) {
    let indexMinValue = aux.indexOf(Math.min(...aux));
    aux[indexMinValue] += customers[i];
  }
  return Math.max(...aux);
};
// console.log(queueTime2([10, 2, 3, 3], 2)); //10

//NUMBER OF ANAGRAMS IN AN ARRAY OF WORDS
/*
An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters.
An example of this is "angel", which is an anagram of "glean".
Write a function that receives an array of words, and returns the total number of distinct
pairs of anagramic words inside it.
Some examples:
There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
*/
function anagramCounter(wordsArray) {
  let counter = 0;
  let anagramsArr = wordsArray.map((word) => word.split("").sort().join(""));
  console.log(anagramsArr);
  for (i = 0; i < anagramsArr.length; i++) {
    for (j = i + 1; j < anagramsArr.length; j++) {
      if (anagramsArr[i] === anagramsArr[j]) counter++;
    }
  }
  return counter;
}
// console.log(anagramCounter(["dell", "ledl", "abc", "cba", "bca", "bac"]));

//ARRAY.DIFF
/*
https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
Your goal in this kata is to implement a difference function, which subtracts one 
list from another and returns the result.
It should remove all values from list a, which are present in list b.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  let result = [];
  for (i = 0; i < b.length; i++) {
    for (j = 0; j < a.length; j++) {
      console.log("b:", b[i], "a:", a[j]);
      if (b[i] === a[j]) {
        a.splice(j, 1);
        j--;
      }
      console.log(a);
    }
  }
  return a;
}

// using filter and a check if b does not include the element from a
const array_diff = (a, b) => {
  const filtered = a.filter((el) => {
    // return b.indexOf(el) == -1
    return !b.includes(el);
  });
  return filtered;
};
// console.log(arrayDiff([1, 2, 3, 2, 3], [2, 1]));

//TGI FRIDAY - IN PROGRESS
/*
https://www.codewars.com/kata/5a0d6d8c6975982b5b000383
We all love fridays, and even better if it is the last day of the month!
In this kata you should write a function that will receive 2 parameters. 
Both are years, and indicates a range.
Your work is to return the number of times a month ends with a Friday.
If there is only one year provided, return the number of times a month ends on Friday on that year. Range bounds are inclusive in every case!
For example, between 1901 and 2000, a month ends on Friday 171 times.
*/
//anchor date: Jan 1, 1800 was a Wednesday
//A year is a leap year if it can be divided by 4, but can't be divided by 100,
// except of case when it can be divided by 400

function lastDayIsFriday(initialYear, endYear) {
  var counter = 0;
  if (!endYear) var endYear = initialYear;

  for (var i = initialYear; i <= endYear; i++) {
    for (var j = 1; j <= 12; j++) {
      var d = new Date(i, j, 0);
      if (d.getDay() == 5) counter++;
    }
  }
  return counter;
}

// console.log(lastDayIsFriday(1901, 2000)); //171

//CLOCKY McCLOCK-FACE
/*
https://www.codewars.com/kata/clocky-mc-clock-face/javascript
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.
And because the local council has lost most of our tax money to a Nigerian email scam there 
are no funds to fix the clock properly.
Instead, they are asking for volunteer programmers to write some code that tell the 
time by only looking at the remaining hour-hand!
What a bunch of cheapskates!
Can you do it? (0 <= angle <= 360)
Examples:
12:00 = 0 degrees
02:00 = 60 degrees
03:00 = 90 degrees
06:00 = 180 degrees
09:00 = 270 degrees
12:00 = 360 degrees
*/
var whatTimeIsIt = function(angle) {
  var allMinutes = Math.trunc(angle*2)
  var minutes = (allMinutes % 60) + ""
  if(minutes.length === 1){
      minutes  = 0 + minutes
    }
  var hours = (allMinutes - minutes) / 60
  var hoursString =  hours.toString()
  if(hoursString.length === 1){
      hoursString = 0 + hoursString
    }
  if(hoursString === "00"){
   hoursString = "12"
    }
  
  var time = hoursString + ":" + minutes
  return time;
  }

  // console.log(whatTimeIsIt(40));
