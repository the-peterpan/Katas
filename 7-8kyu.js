//WEEK 5 DAY 1
//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

//convert to array
//for each element in array, take the element and add count to corresponding pile(ie value for that key)
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

//count(myString);

//WEEK 5 DAY 2. https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
//Write a function that takes an array of numbers (integers for the tests) and a target
//number. It should find two different items in the array that, when added together, give
//the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

let arr = [1, 2, 3];
let target = 4;
//answer should be (0, 2)

function twoSum(numbers, target) {
  for (number of numbers) {
    for (let i = 1; i < numbers.length; i++) {
      if (number + numbers[i] === target) {
        console.log(number, numbers.indexOf(number), numbers[i], i);
        return [numbers.indexOf(number), i];
      }
    }
  }
}

//let answer = twoSum(arr, target);
//console.log(twoSum(arr, target));

//www.codewars.com/kata/517abf86da9663f1d2000003
//Complete the method/function so that it converts dash/underscore delimited words
//into camel casing. The first word within the output should be capitalized only if
//the original word was capitalized (known as Upper Camel Case, also often referred
//to as Pascal case).

let str = "the-stealth-warrior"; // returns "theStealthWarrior"

function toCamelCase(str) {
  let arr = str.split("-");
  let capsArr = [];
  for (i = 0; i < arr.length; i++) {
    //if (arr[0].charAt(0) === arr[0].charAt(0).toUpperCase()) {
    //console.log("X");
    // } else {
    capsArr += arr[i][0].toUpperCase() + arr[i].slice(1);
    // }
  }
  return capsArr;
}

// let answer = toCamelCase(str);
// console.log(answer);

//In this kata, you've to count lowercase letters in a given string and return the letter
// count in a hash with 'letter' as key and count as 'value'. The key must be
//'symbol' instead of string in Ruby and 'char' instead of string in Crystal.
//EG: letterCount('arithmetics') #=> {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}

let str1 = "code";

function letter_count(str) {
  let newStr = str.split("");
  let counter = 0;
  let object = {};
  for (i = 0; i < newStr.length; i++) {
    if (letter in object) {
      object = {};
      key = newStr.charAt([i]);
      value = i++;
      console.log(key, value);
    }
    // let key = newStr.charAt([i]);
    // object.key = ;
    // console.log(object);
  }
  //return object;
}

// letter_count(str1);

//https://www.codewars.com/kata/52774a314c2333f0a7000688

//https://www.codewars.com/kata/550498447451fbbd7600041c

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

function comp(array1, array2) {
  array1.forEach((el) => {
    //console.log(el);
    //for (i = 0; i < array2.length; i++) {
    //console.log(array2[i]);
    if (array2.includes(el * el)) {
      console.log("true");
    }

    //)=== array2[i]) {
    //console.log(el, array2[i], "true");
    else console.log(el, array2[i], "false");
    //}
  });
}

//console.log(comp(a, b));

//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  let sStr = s.split("");
  //console.log(sStr);
  //   let arr = [];
  //   //let repeat = "";
  //   for (i = 0; i < sStr.length; i++) {
  //     sStr += sStr[i];
  //   let (j = 0; j < i.length; j++) {
  // console.log(j);
  //   }

  //   arr.push(s[i]);
  //return arr; //console.log(res, repeat);
}

// console.log(accum("abcd"));

// console.log(
//   ["a", "b", "c", "d"].reduce(function (res, current, index, array) {
//     return res.concat([current, current]);
//   }, [])
// );

//https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(arr, numTills) {
  let result = [];
  for (i = 0; i < numTills; i++) {
    results.push(0);
  }

  // arr.forEach((el) => {
  //   if (el) i.push(el);
  //   console.log("i", i);
  // });
}

// console.log(queueTime([10, 2, 3, 3], 2));

// first solution:
function removeEveryOther(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 0 !== 2) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// second solution:
function removeEveryOther(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArray.push(arr[i]);
  }
  return newArray;
}

//**********************POST BOOTCAMP KATAS ***************************

//HOW MANY PAIRS OF DUPLICATES?
// https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3
//E.G. myArr = [1000, 1000]; //Answer: 1
//E.G. myArr = [1, 2, 5, 6, 5, 2]; //Answer: 2
myArr = [1, 2, 2, 20, 6, 20, 2, 6, 2]; //Answer: 4

function duplicates(arr) {
  counter = 0;
  if (arr.length === 0 || arr.length === 1) {
    return 0;
  } else {
    for (i = 0; i < arr.length; i++) {
      for (j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1);
          counter += 1;
          break;
        }
      }
    }

    return counter;
  }
}

// SLIGHTLY DIFFERENT APPROACH TO ABOVE

function duplicates(arr) {
  let counter = 0;
  let filteredArr = [];

  if (arr.length === 0 || arr.length === 1) {
    return 0;
  } else {
    for (i = 0; i < arr.length; i++) {
      for (j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1); //splice j first because if remove i index first, the position of j changes
          arr.splice(i, 1);
          i--; // to reset i loop now after removing i. Otherwise the index increments and the next value after this i is skipped
          counter += 1;
        }
      }
    }
  }
  return counter;
}

function duplicates2(arr) {
  counter = 0;
  arr.sort((a, b) => a - b);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter += 1;
      i++;
    }
  }
  return counter;
}

const duplicates3 = (array) => {
  console.log(array);
  let double = [];
  let count = 0;
  array.forEach((el) => {
    if (double[el] != el) {
      double[el] = el;
    } else {
      double[el] = undefined;
      count++;
    }
    console.log(
      "El:",
      el,
      "double[el]:",
      double[el],
      "indexOf(double[el]:",
      double.indexOf(double[el]),
      double
    );
  });

  return count;
};

//console.log(duplicates(myArr));

//SUM OF DIFFERENCES
//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
//1. .sort to put in descending order
//2. for loop through array. Start at index 0, subtract i + 1 from i at each iteration to get differences
//3. add the difference to result variable
//sumOfDifferences([2, 1, 10]) Returns 9
numArr = [2, 1, 10];

function sumOfDifferences(arr) {
  let result = 0;
  arr.sort((a, b) => b - a);
  for (i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] - arr[i + 1]);
    result += arr[i] - arr[i + 1];
  }
  return result;
}

//console.log(sumOfDifferences(numArr)),

//CREDIT CARD MASK
//https://www.codewars.com/kata/5412509bd436bd33920011bc
//maskify("4556364607935616") == "############5616"
//1. turn string into array
//2. loop that ends at arr.length-4 and replaces each element with #
let creditCardNo = "4556364607935616";

function maskify(num) {
  let arrOfNums = [...num];
  for (i = 0; i < arrOfNums.length - 4; i++) {
    arrOfNums[i] = "#";
  }
  return arrOfNums.join("");
}

function maskify2(num) {
  let numArr = [...num];
  let hashed = numArr.splice(0, numArr.length - 4);
  hashes = hashed.map((number, index) => "#").join("");
  //return `${hashes}${numArr.join("")}`;
  return hashes + numArr.join("");
}

//console.log(maskify(creditCardNo));

//DISTINCT DIGIT YEAR
//https://www.codewars.com/kata/58aa68605aab54a26c0001a6/train/javascript

function distinctDigitYear(year) {
  for (let i = year + 1; i < 9000; i++) {
    if (numberIsDistinct(i)) return i;
  }
}

function numberIsDistinct(num) {
  num = num.toString();
  console.log(num);
  for (let i = 0; i < num.length; i++) {
    console.log(num[i], i + 1);
    if (num.indexOf(num[i], i + 1) !== -1) {
      return false;
      //i.e. search value of num[i], starting search AFTER this first occurence.
      //returns -1 if the value never occurs and is therefore UNIQUE
    }
  }
  return true;
}

function distinctDigitYear2(year) {
  let ySt = new Set();
  let i = 1;
  while (ySt.size != 4) {
    ySt = new Set((year + i).toString());
    console.log(ySt);
    i++;
  }

  let result = "";
  for (let item of ySt) {
    result += `${item}`;
  }

  return Number(result);
}

//console.log(distinctDigitYear(1987));

//DIVIDE AND CONQUER
//https://www.codewars.com/kata/57eaec5608fed543d6000021
/*Given a mixed array of number and string representations of integers, 
add up the string integers and subtract this from the total of the non-string integers.
Return as a number.
*/

let divideArr = [9, 3, "7", "3"]; // Answer: 2

function divCon(x) {
  let sumNumbers = 0;
  let sumStrings = 0;
  for (i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      sumNumbers += x[i];
    } else if (typeof x[i] === "string") {
      sumStrings += Number(x[i]);
    }
  }
  return sumNumbers - sumStrings;
}

function divCon2(x) {
  let sumNumbers = 0;
  let sumStrings = 0;
  x.forEach((el) => {
    if (typeof el === "number") {
      sumNumbers += el;
    }
    if (typeof el === "string") {
      sumStrings += Number(el);
    }
  });
  return sumNumbers - sumStrings;
}

function divCon3(x) {
  const nums = x.filter((num) => typeof num === "number");
  const strings = x.filter((str) => typeof str === "string");
  const sumstr = strings.reduce(
    (acc, currentVal) => (acc += parseInt(currentVal)),
    0
  );

  const sumnum = nums.reduce((acc, currentVal) => (acc += currentVal), 0);
  return sumnum - sumstr;
}

function divCon4(x) {
  return x.reduce(
    (acc, val) => (typeof val === "number" ? acc + val : acc - parseInt(val)),
    0
  );
}

//console.log(divCon4(divideArr));

//FREQUENCY SEQUENCE
/*
https://www.codewars.com/kata/frequency-sequence
Return an output string that translates an input string s/$s by replacing each character in s/$s
with a number representing the number of times that character occurs in s/$s and separating each number
with the character(s) sep/$sep.
*/
//To get the number of occurrences of certain character:
// const character = "w";
// console.log("hello world".split(character).length - 1);

let string1 = "^^^**$";
let string2 = "x";

function freqSeq(string1, string2) {
  let result = [];
  //use .call() method on .map() to convert string to an array
  //.call() enables us to copy the context of one object to another, e.g. of .map() for an array over to a string
  const map = Array.prototype.map;
  const newArr = map.call(string1, (eachLetter) => {
    let countLetter = string1.split(eachLetter).length - 1;
    result += `${countLetter}${string2}`;
  });

  return result.slice(0, result.length - 1);
}

const freqSeq2 = (str, sep) =>
  [...str].map((char) => str.split(char).length - 1).join(sep);

//console.log(freqSeq2(string1, string2));

//LIST FILTERING
/*
https://www.codewars.com/kata/list-filtering
In this kata you will create a function that takes a list of non-negative integers and
strings and returns a new list with the strings filtered out.
Example 
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(list) {
  let numbers = [];
  list.forEach(function (item) {
    if (typeof item == "number") {
      numbers.push(item);
    }
  });
  return numbers;
}

let arrayToFilter = [1, 2, "a", "b"];

function filter_list2(list) {
  return list.filter((el) => typeof el !== "string");
}

const filter_list3 = (list) => list.filter((el) => typeof el === "number");

//console.log(filter_list3(arrayToFilter));

//MOST SALES
//https://www.codewars.com/kata/5e16ffb7297fe00001114824
//You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

const products = ["Computer", "Cell Phones", "Vacuum Cleaner"];
const amounts = [3, 24, 8];
const prices = [199, 299, 399];

/*
return the three product names with the highest revenue (amount * price).
Note: if multiple products have the same revenue, order them according to their original positions in the input list.
*/
function top3(products, amounts, prices) {
  const rev = [];
  const result = [];
  for (i = 0; i < 3; i++) {
    rev.push(amounts[i] * prices[i]);
  }

  for (i = 0; i < 3; i++) {
    result.push(products[rev.indexOf(Math.max(...rev))]);
    rev[rev.indexOf(Math.max(...rev))] = -1;
  }

  return result;
}

//REFACTORING
function top3refactored(products, amounts, prices) {
  const rev = products.map(function (val, i, arr) {
    console.log(val, i, arr);
    return {
      revenue: prices[i] * amounts[i],
      name: arr[i],
      index: i,
    };
  });
  const sorted = rev.sort(function (a, b) {
    // if b.revenue - a.revenue is 0 -> falsy then we sort by the index ascending
    return b.revenue - a.revenue || a.index - b.index;
  });
  return sorted.slice(0, 3).map(function (item) {
    return item.name;
  });
}

//console.log(top3(products, amounts, prices));

//MUMBLING
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
/*
This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/
let accumString = "RqaEzty";
function accum(string) {
  let splitString = [...string];
  for (i = 0; i < splitString.length; i++) {
    splitString[i] =
      splitString[i].toUpperCase() + splitString[i].toLowerCase().repeat(i);
    console.log(splitString[i]);
  }
  return splitString.join("-");
}

//Refactored

const accum2 = (string) =>
  string
    .toLowerCase()
    .split("")
    .map((char, i) => char.toUpperCase() + char.repeat().join("-"));

//console.log(accum(accumString));

//ORDERED COUNT OF CHARACTERS
//https://www.codewars.com/kata/57a6633153ba33189e000074
/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

function orderedCount(str) {
  const noDupesArr = [];
  let result = [];
  for (i = 0; i < str.length; i++) {
    if (!noDupesArr.includes(str[i])) {
      noDupesArr.push(str[i]);
    }
  }
  noDupesArr.forEach((el) => {
    const occurences = str.split(el).length - 1;
    result.push([el, occurences]);
  });
  return result;
}

const orderedCount2 = (str) => {
  const strArr = str.split("");
  const arrayWithoutDupes = strArr.filter((item, pos) => {
    return strArr.indexOf(item) === pos;
  });
  let result = [];
  arrayWithoutDupes.forEach((el) => {
    const occurences = str.split(el).length - 1;
    result.push([el, occurences]);
  });
  return result;
};

const orderedCount3 = (str) => {
  const strSet = new Set(str);
  return [...strSet].map((el) => [el, str.split(el).length - 1]);
};

//console.log(orderedCount3("abracadabra"));

//PANDEMIA

/*
https://www.codewars.com/kata/5e2596a9ad937f002e510435/train/javascript
⚠️ The world is in quarantine! There is a new pandemic that struggles mankind. Each continent is isolated from each other but infected people have spread before the warning. ⚠️
🗺️ You would be given a map of the world in a type of string:
string s = "01000000X000X011X0X"
'0' : uninfected
'1' : infected
'X' : ocean
⚫ The virus can't spread to the other side of the ocean.
⚫ If one person is infected every person in this continent gets infected too.
⚫ Your task is to find the percentage of human population that got infected in the end.
❗❗ The first and the last continent are not connected!
💡 Example:
 start: map1 = "01000000X000X011X0X"
 end:   map1 = "11111111X000X111X0X"
 total = 15
 infected = 11
 percentage = 100*11/15 = 73.33333333333333
➕ For maps without oceans "X" the whole world is connected.
➕ For maps without "0" and "1" return 0 as there is no population.
*/

function infected(s) {
  let infected = 0;
  let uninfected = 0;

  continentsArr = s.split("X");

  console.log(continentsArr);

  for (i = 0; i < continentsArr.length; i++) {
    if (continentsArr[i].includes("1")) {
      infected += continentsArr[i].length;
    } else {
      uninfected += continentsArr[i].length;
    }
    console.log(continentsArr[i], "infected", infected);
    console.log(continentsArr[i], "uninfected", uninfected);
  }
  const percentage = 100 * (infected / (uninfected + infected));
  return percentage || 0;
}

function infected2(s) {
  let newS = [];
  newS = s.split("X");
  let totalInfected = 0;
  let totalPeople = 0;
  for (let i = 0; i < newS.length; i++) {
    totalPeople += newS[i].length;
    if (newS[i].includes("1")) {
      totalInfected += newS[i].length;
    }
  }
  if (totalPeople === 0) {
    return 0;
  } else {
    return (totalInfected / totalPeople) * 100;
  }
}

function infected3(s) {
  const continents = s.split("X");
  let total = 0;
  let infected = 0;
  for (let continent of continents) {
    total += continent.length;
    if (continent.includes("1")) {
      infected += continent.length;
    }
  }
  if (total === 0) {
    return 0;
  } else {
    return (infected / total) * 100;
  }
}

//console.log(infected3("01000000X000X011X0X")); //Answer: 73.33333333333333

//THE OFFICE I - OUTED
/* 
https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, 
you've been using the work computers to smash in endless hours of codewars.
In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. 
You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.
Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, 
you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. 
Else return 'Nice Work Champ!'.
Happiness rating will be total score / number of people in the room.
Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
*/

const meet = {
  tim: 0,
  jim: 2,
  randy: 0,
  sandy: 7,
  andy: 0,
  katie: 5,
  laura: 1,
  saajid: 2,
  alex: 3,
  john: 2,
  mr: 0,
};
const boss = "laura";

function outed(meetObject, bossString) {
  let totalScore = 0;
  for (const prop in meetObject) {
    console.log(prop, meetObject[prop]);
    if (prop === bossString) {
      totalScore += meetObject[prop] * 2;
    } else {
      totalScore += meetObject[prop];
    }
  }
  if (totalScore / Object.keys(meetObject).length <= 5) {
    return "Get Out Now!";
  } else {
    return "Nice Work Champ!";
  }
}

function outed2(meetObject, bossString) {
  let totalScore = 0;
  for (const prop in meetObject) {
    totalScore += meetObject[prop];
  }
  if (
    (totalScore + meetObject[bossString]) / Object.keys(meetObject).length <=
    5
  ) {
    return "Get Out Now!";
  } else {
    return "Nice Work Champ!";
  }
}

function outed3(meetObject, bossString) {
  const totalScore = Object.keys(meetObject).reduce((sum, name) => {
    if (name === bossString) return sum + meetObject[name] * 2;
    else return sum + meetObject[name];
  }, 0);

  if (totalScore / Object.keys(meetObject).length <= 5) return "Get Out Now!";
  else return "Nice Work Champ!";
}

function outed4(meet, boss) {
  let names = Object.keys(meet);
  let score = names.reduce((s, v) => s + meet[v], 0) + meet[boss];
  return score / names.length > 5 ? "Nice Work Champ!" : "Get Out Now!";
}

// console.log(outed3(meet, boss));
