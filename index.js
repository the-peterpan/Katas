//WEEK 4 DAY 4

//Task 1:
//www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
//In this kata you will create a function that takes a list of non-negative
//integers and strings and returns a new list with the strings filtered out.
let list = [1, 2, "a", "b"];
function filter_list(l) {
  let numbers = [];
  l.forEach(function (item) {
    if (typeof item == "number") {
      numbers.push(item);
    }
  });
  return numbers;
}

//Task 2:
//www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3/train/python
//You are given array of integers, your task will be to count all pairs in that array and return their count.

// const duplicates = (arr) => {
//   let double = [];
//   let count = 0;
//   arr.forEach((el) => {
//     if (double[el] !== el) {
//       double[el] = el;
//       console.log(double);
//     } else {
//       double[el] = undefined;
//       count++;
//     }
//   });
//   return count;
// };

// duplicates(arr);

//#Make the magic happen

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

//**********************POST BOOTCAMP KATAS ***************************

// https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3

//myArr = [1000, 1000]; // 1
//myArr = [1, 2, 5, 6, 5, 2]; //2
myArr = [1, 2, 2, 20, 6, 20, 2, 6, 2]; //4

//USING NESTED FOR LOOPS

// function duplicates(arr) {
//   counter = 0;
//   if (arr.length === 0 || arr.length === 1) {
//     return 0;
//   } else {
//     for (i = 0; i < arr.length; i++) {
//       for (j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//           arr.splice(j, 1);
//           counter += 1;
//           break;
//         }
//       }
//     }

//     return counter;
//   }
// }

//USING SORT & SINGLE FOR LOOP

// function duplicates(arr) {
//   counter = 0;
//   arr.sort((a, b) => a - b);
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       counter += 1;
//       i++;
//     }
//   }
//   return counter;
// }

//USING FOREACH AND NEW ARRAY
const duplicates = (array) => {
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

console.log(duplicates(myArr));
