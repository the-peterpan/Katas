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

// EXERCISE 9: write the methods .getAge(), .addJoke() and .getRandomJoke()

let chuck = {
  firstName: "Chuck",
  lastName: "Norris",
  birthDate: new Date("1940-03-10"),
  jokes: [
    "Chuck Norris counted to infinity... Twice.",
    "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis",
  ],

  displayInfo: function () {
    console.log(
      "My name is " +
        this.firstName +
        " " +
        this.lastName +
        " and I have " +
        this.jokes.length +
        " jokes!"
    );
  },
  getAge: function () {
    // new Date() gives the number of milliseconds
    // return new Date().getFullYear() - this.birthDate.getFullYear();
    return Math.floor((new Date() - this.birthDate) / 31536000000);
  },
  addJoke: function (joke) {
    this.jokes.push(joke);
  },
  getRandomJoke: function () {
    return this.jokes[Math.floor(Math.random() * this.jokes.length)];
  },
};

// chuck.displayInfo();

// console.log("getAge", chuck.getAge()); // Should return 79 if you are in 2019

// chuck.addJoke("Chuck Norris can divide by zero.");
// console.log("getRandomJoke", chuck.getRandomJoke());
// chuck.addJoke("Chuck Norris kills flies with his gun.");
// console.log("getRandomJoke", chuck.getRandomJoke());
// chuck.addJoke("Chuck Norris was once in a knife fight, and the knife lost.");
// console.log("getRandomJoke", chuck.getRandomJoke());

// chuck.displayInfo();

//EXERCISE 10. OOP, CLASS AND INHERITANCE
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculatePerimeter() {
    return this.width * 2 + this.height * 2;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

// var r1 = new Rectangle(6, 7);
// console.log("Perimeter of r1 =", r1.calculatePerimeter()); // 26
// console.log("Area of r1 =", r1.calculateArea()); // 42

// var s1 = new Square(5);
// console.log(s1);
// console.log("Perimeter of s1 =", s1.calculatePerimeter()); // 20
// console.log("Area of s1 =", s1.calculateArea()); // 25

// var s2 = new Square(10);
// console.log("Perimeter of s2 =", s2.calculatePerimeter()); // 40
// console.log("Area of s2 =", s2.calculateArea()); // 100
