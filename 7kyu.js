//MISSING VALUES

function missingValues(arr) {
  let resultObj = {};
  let x, y;
  arr.forEach((el, index) => {
    if (!resultObj[el]) {
    resultObj[el] = [index];
    } else {
      resultObj[el].push(index);
    }
  });

  for (const [key, value] of Object.entries (resultObj)) {
    if (value.length === 2) y = key;
    if (value.length === 1) x = key;
  }
return x*x*y;
}

function missingValues2(arr) {
  const x = arr.find( v => arr.filter( w => v===w ).length===1 );
  const y = arr.find( v => arr.filter( w => v===w ).length===2 );
  return x*x*y;
}
// console.log(missingValues2([42, 23, 45, 33, 33, 19, 42, 79, 79, 23, 95, 95, 79, 19, 42, 33, 19, 23])); //192375


//REMOVE CONSECUTIVE DUPLICATE WORDS
/*
https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
Your task is to remove all consecutive duplicate words from string, 
leaving only first words entries. For example:
"alpha beta beta gamma gamma gamma delta alpha beta beta
 gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

const removeConsecutiveDuplicates = s => { 
  wordArr = s.split(' ');
  const result = (wordArr.filter((curWord, index) => curWord !== wordArr[index+1])).join(' ');
  return result;
}

// console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));

//GET THE MIDDLE CHARACTER
/*
https://www.codewars.com/kata/56747fd5cb988479af000028

ou are going to be given a word. Your job is to return the middle character
of the word. If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
*/

function getMiddle(s) {
  let middle = s.length/2;
  if (s.length % 2 === 0) return ([...s].splice(Math.floor((middle-1)), 2)).join('')
  else return s.charAt(middle);
}

function getMiddle2(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// console.log(getMiddle2("middle"));

// HIGHEST AND LOWEST
/*
https://www.codewars.com/kata/554b4ac871d6813a03000035
In this little assignment you are given a string of space separated 
numbers, and have to return the highest and lowest number.

Example:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers){
  let numArr = [];
  let stringArr = ([...numbers.split(' ')].map(element => {
    if (Number(element) || (element === "0")) numArr.push(Number(element))
    return Number(element)
  }));

  //alternatively:
  //numbers = numbers.split(' ').map(Number)
  let min = Math.min.apply(Math, numArr)
  let max = Math.max.apply(Math, numArr)
  
 return `${max} ${min}`;  
}

// console.log(highAndLow("1 1 0"));

//DISEMVOWEL TROLLS
/*
https://www.codewars.com/kata/52fba66badcd10859f00097e
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from 
the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string
with all vowels removed.
For example, the string "This website is for losers LOL!" would become 
"Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  let result = []
  for (i=0; i<str.length; i++) {
    if ((str[i] !== "a") && (str[i] !== "e") && (str[i] !== "i") && (str[i] !== "o") && (str[i] !== "u")){
    result.push(str[i])
    }
 }
  
  return result.join("");
}

function disemvowel2(str) {
let result = "";
  [...str].forEach(el => {
  switch (el.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":  
      break;
    default:
      result += el;
  }
})
return result;
}

function disemvowel3(str) {
  return str.replace(/[aeiou]/ig,'');
}

// console.log(disemvowel2("This website is for losers LOL!"));


//ISOGRAMS
/*
https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

An isogram is a word that has no repeating letters, consecutive or
non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str){
let strArr = [];
let result = true;
  [...str].forEach(letter => {
  if(strArr.length === 0 || !strArr.includes(letter.toLowerCase())) {
    strArr.push(letter.toLowerCase());
  }
   else if (strArr.includes(letter.toLowerCase())) result = false;
  
});
return result
}

// console.log(isIsogram("Dermatoglyphics")); //true

//SHORTEST WORD
/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  let wordLengthArr = s.split(' ').map(word => word.length);
  // wordLengthArr.sort(function(a, b) {
  //   return a - b;
  // })
  // console.log(wordLengthArr)
  return Math.min(...wordLengthArr);
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

//GROWTH OF A POPULATION
/*
https://www.codewars.com/kata/563b662a59afc2b5120000c6

In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year and moreover 
50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
*/
function nbYear(p0, percent, aug, p) {
  let nbYear = 1;
  let totalPopulation = p0 + p0*(percent/100) + aug;
  while (totalPopulation < p) {
    let p0 = totalPopulation;
    let yearlyIncrease = p0*(percent/100) + aug;
    totalPopulation += yearlyIncrease;
    nbYear++;
  }
  
  return nbYear;
}

// console.log(nbYear(1000, 2, 50, 1200)); //3

//HOMOGENOUS ARRAYS
/*
https://www.codewars.com/kata/57ef016a7b45ef647a00002d

Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

Example:
Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].
*/

function filterHomogenous(arrays) {
  let result = [];
  for (let i=0; i<arrays.length; i++) {
    if (new Set(arrays[i].map(el => typeof el)).size === 1) {
      result.push(arrays[i])
    }
  }
  return result;
}

// console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])); //[[1, 5, 4], ['b']]


// Regex validate PIN code
/*
https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.

Examples
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN (pin) {
if (pin.length === 4 || pin.length ===6) {
  const regexpDigits = /\d/g;
  const digitsInPin = pin.match(regexpDigits);
  if (pin.length === digitsInPin.length) return true;
  else return false;
}
else return false;
}

//solution without Regex
function validatePIN2 (pin) {
  let result = false;
  if (pin.length === 4 || pin.length ===6) {
    for (i=0; i<pin.length; i++) {
      console.log(Number(pin[i]))
      if (pin[i] === " ") return false;
      if (Number(pin[i]) >= 0) {
        result = true;
        continue;
      }

      else {
        result = false;
        break;
      }
   
      
    }
  }
  return result;
}

// console.log(validatePIN("123=")); //false

//YOU'RE A SQUARE!
/*
https://www.codewars.com/kata/54c27a33fb7da0db0100040e
Examples.
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

var isSquare = function(n){
  if (n<0) return false;
  let squareRoot = Math.sqrt(n);
  return Number.isInteger(squareRoot);
}

// console.log(isSquare(0)); //true
// console.log(isSquare(3)); //false
// console.log(isSquare(25)); //true
// console.log(isSquare(-1)); //false


//Money, Money, Money

/*
https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
*/

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  if (principal >= desired) return 0;
  do {
    let accruedInterest = principal*interest;
    let yearlyTax = (principal*interest)*tax;
    principal += accruedInterest - yearlyTax;
    years++;
  }
  while (principal < desired);
  
  return years;
}

// console.log(calculateYears(1000, .05, .18, 1100)); //3
// console.log(calculateYears(1000, 0.01625,0.18,1200)); //14
// console.log(calculateYears(1000, 0.05,0.18,1000)); //0

//
/*
https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
*/

class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
  }

  toString = function() { return this.name }
}


function declareWinner(fighter1, fighter2, firstAttacker) {
  let secondAttacker;
  let winner;

  if (firstAttacker === fighter1.toString()) {
    firstAttacker = fighter1;
    secondAttacker = fighter2;
  } 
  else {
    firstAttacker = fighter2;
    secondAttacker = fighter1;
  }

  let numFirstAttackerAttacks = secondAttacker.health/firstAttacker.damagePerAttack;
  let numSecondAttackerAttacks = firstAttacker.health/secondAttacker.damagePerAttack;

  if (Math.floor(numFirstAttackerAttacks) === Math.floor(numSecondAttackerAttacks)) {
    if (numSecondAttackerAttacks % 1 === 0) winner = secondAttacker;
    else winner = firstAttacker;
  }
    
  else if (numFirstAttackerAttacks < numSecondAttackerAttacks) winner = firstAttacker;
  else winner = secondAttacker;

  return winner.name.toString();
}


// Refactored & other solutions:

function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }
  
  if (fighter1.health <= 0 && fighter2.health <= 0)
    return firstAttacker;
  else if (fighter1.health <= 0)
    return fighter2.name;
  else
    return fighter1.name;
}

//  console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")); //Lew
// console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")); // Harald
// console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")); //Harry
// console.log(declareWinner(new Fighter("David", 872, 56), new Fighter("Mark", 526, 91), "Mark")); //Mark
// console.log(declareWinner(new Fighter('Lui', 22, 42), new Fighter('Max', 20, 34), 'Max'));


//COUNT THE DIGIT
/*
https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
*/

