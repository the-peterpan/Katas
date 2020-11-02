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
  //  numbers = numbers.split(' ').map(Number)
  let min = Math.min.apply(Math, numArr)
  let max = Math.max.apply(Math, numArr)
  
 return `${max} ${min}`;  
}

console.log(highAndLow("1 1 0"));