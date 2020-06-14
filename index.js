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

console.log(divCon4(divideArr));
