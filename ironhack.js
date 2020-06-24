//IRONHACK EXERCISES

//EXERCISE 1:
//Given an array of cities, return an array with the first letter of each city’s name capitalized. You can use ES5 or ES6 syntax, whichever you feel more comfortable with at this point.
var cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

cities2 = cities.map((city) => city[0].toUpperCase() + city.slice(1));

//console.log(cities2);

//EXERCISE 2:
//Return a new array of objects, but this time the objects should contain only student´s name,
//and their final exam grade.
const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90,
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
    finalExam: 65,
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
    finalExam: 99,
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
    finalExam: 70,
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
    finalExam: 85,
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
    finalExam: 78,
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
    finalExam: 90,
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
    finalExam: 75,
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
    finalExam: 67,
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
    finalExam: 65,
  },
];

const students2 = students.map((student) => {
  return { name: student.name, finalGrade: student.finalExam };
});

//console.log(students2);

//EXERCISE 3:
//Return the sum of all the ages

const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
];

const ages = people.reduce(function (sum, person) {
  return sum + person.age;
}, 0);

// console.log(ages);

//EXERCISE 4:
//Given a menu of foods and their calories, calculate the average number of calories for the entire list.
const menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 },
];

const averageCalories = menu.reduce(function (sum, food) {
  return sum + food.calories / menu.length;
}, 0);

//console.log(averageCalories);

//EXERCISE 5:
//Find the average rate for the product

const product = {
  name: "AmazonBasics Apple Certified Lightning to USB Cable",
  price: 7.99,
  manufacter: "Amazon",
  reviews: [
    {
      user: "Pavel Nedved",
      comments: "It was really usefull, strongly recommended",
      rate: 4,
    },
    { user: "Alvaro Trezeguet", comments: "It lasted 2 days", rate: 1 },
    { user: "David Recoba", comments: "Awesome", rate: 5 },
    { user: "Jose Romero", comments: "Good value for money", rate: 4 },
    { user: "Antonio Cano", comments: "It broked really fast", rate: 2 },
  ],
};

const averageRate = product.reviews.reduce((sum, review) => {
  return sum + review.rate / product.reviews.length;
}, 0);

// console.log(averageRate);

//EXERCISE 6:
//Given the following array, filter the ones who are eligible to go to bars in the USA
var peopleAges = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 20 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

const olderEnoughToDrink = peopleAges.filter((person) => person.age >= 21);

// console.log(olderEnoughToDrink);

//EXERCISE 7:
//Giving the following arrays of objects, let’s filter just the one with a pool.
const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelona´s center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "Room near Sagrada Familia",
    price: 170,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Great house next to Camp Nou",
    price: 140,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "New apartment with 2 beds",
    price: 2000,
    type: "Entire place",
    pool: false,
    garage: true,
  },
  {
    title: "Awesome Suite",
    price: 230,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];

const placesWithPool1 = places.filter((place) => place.pool === true);
const placesWithPool2 = places.filter((thePlace) => thePlace.pool);

// console.log(placesWithPool2);

//EXERCISE 8
//Given an array of numbers, filter out the ones that are not even, and are greater than 42.
const numbers = [1, 60, 112, 123, 100, 99, 73, 45];
const resultEx8 = numbers.filter((number) => number % 2 !== 0 && number > 42);

// console.log(resultEx8);
