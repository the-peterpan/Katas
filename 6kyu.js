//ARE THEY THE SAME?
/*
https://www.codewars.com/kata/550498447451fbbd7600041c
Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" 
elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
*/
let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
//Returns true

let c = [69, 14, 37, 19];
let d = [4761, 196, 1369, 362];

function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  let sorted1 = array1.sort((a, b) => a - b);
  let sorted2 = array2.sort((a, b) => a - b);
  for (i = 0; i < sorted1.length; i++) {
    if (sorted1[i] * sorted1[i] !== sorted2[i]) {
      return false;
    }
  }
  return true;
}

function comp2(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}
// console.log(comp2(c, d));

//ARRAY.DIF
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

function arrayDiff2(a, b) {
  let filtered = [];
  a.filter((e) => {
    if (!b.includes(e)) filtered.push(e);
  });
  return filtered;
}

function arrayDiff3(a, b) {
  return a.filter((e) => !b.includes(e));
}

function arrayDiff4(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) == -1;
  });
}

// console.log(arrayDiff4([1, 2, 2, 2, 3], [2]));

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

console.log(cleanString2("abc####d##c#"));
