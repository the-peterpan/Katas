/* PETE THE BAKER
https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths.
Can you help him to find out, how many cakes he could bake considering his recipes?
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and
returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts
(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects,
can be considered as 0.
Examples:
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
*/

function cakes(recipe, available) {
  let result = [];

  for (let ingredient in recipe) {
    if (!available[ingredient]) return 0;
    result.push(available[ingredient] / recipe[ingredient]);
  }
  return Math.floor(Math.min(...result));
}
// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// ); //2

//VALID PARENTHESES
/*
https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
Write a function called that takes a string of parentheses, and determines if the order 
of the parentheses is valid. The function should return true if the string is valid, and 
false if it's invalid.
Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/
function validParentheses(parens) {
  let left = 0;
  for (i = 0; i < parens.length; i++) {
    if (left < 0 || parens.length <= 1) return false;
    if (parens[i] === "(") left++;
    if (parens[i] === ")") left--;
  }
  if (left !== 0) return false;
  return true;
}
const validParentheses2 = (p) => {
  let queue = [];
  for (let el of p) {
    if (el === "(") {
      queue.push(el);
    } else if (queue.pop() !== "(") {
      return false;
    }
  }
  return queue.length === 0;
};
// console.log(validParentheses2("()"));

// // first solution:
// function removeEveryOther(arr) {
//     let newnumStr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 0 !== 2) {
//         newnumStr.push(arr[i]);
//       }
//     }
//     return newnumStr;
//   }

//   // second solution:
//   function removeEveryOther(arr) {
//     let newnumStr = [];
//     for (let i = 0; i < arr.length; i += 2) {
//       newnumStr.push(arr[i]);
//     }
//     return newnumStr;
//   }
