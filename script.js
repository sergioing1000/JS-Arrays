///////////////////////////////////////////////////////////////////////////////
// POP() METHOD
// This method removes the last Element from an array and returns that element.
///////////////////////////////////////////////////////////////////////////////

// let names = ["Jhon", "Paul", "Michael", "Mike"];

// console.log("This is the original Array");
// console.log(names);

// let removedName = names.pop();

// console.log("despues de hacer el pop");
// console.log(names);

// console.log("El tipo de la variable era");
// console.log(typeof (removedName));

// console.log("La variable era");
// console.log(removedName);
// console.log("y fue removida por el método POP");

///////////////////////////////////////////////////////////////////////////////
// REDUCE() METHOD
// This method executes a reducer function on each element of the array and returns a single output value.
// ///////////////////////////////////////////////////////////////////////////////

// const numbers = [2, -5, 8, 9];

// const sum = numbers.reduce((accumulator, currentValue) => {

//   return accumulator + currentValue;

// }
// , 0);

// console.log(sum);

//////////////////////

// const numbers1 = [2, 3, 6, 7, 4];
// const numbers2 = [3, 4, 8, 2, 4];

// let sum = numbers1.reduce((accumulator, currentValue) => {

//   return accumulator + currentValue;

// }
//   , 0);

// console.log("terminando el primer arreglo el valo de sum es:");
// console.log(sum);

// sum = numbers2.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }
//   , sum);

// console.log("terminando el segundo arreglo el valor de sum es:");

// console.log(sum);

///////////////////////////////////////////////////////////////////////////////
// FOREACH() METHOD
// This method executes a provided function for each array element.
// ///////////////////////////////////////////////////////////////////////////////

// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach((item, index, arr) => {
//   console.log(`In the follwoing array: ${arr}, the array in the position ${index} is ${item}`);
// });

// numbers.forEach((item, index, arr) => {
//   console.log(`a[${index}] = ${item}`);
// });


// const letters = ["f", "b", "a", "c", "b", "c", "d", "e", "e", "a", "b", "c"]

// let count = {};

// letters.forEach(item => {

//   if (count[item]) {
//     count[item]++;
//   } else {
//     count[item] = 1;
//   }

// });

// console.log(count);

///////////////////////////////////////////////////////////////////////////////
// FIND() METHOD
// This method returns the value of the first array element that stifies the provides test function
// ///////////////////////////////////////////////////////////////////////////////

// let numbers = [5, 9, 16, 25, 36, 49];

// let firstSquare = numbers.find(function (num) {
//   return Math.sqrt(num) % 1 === 0;
// });

// console.log(firstSquare);

///////////////////////////////////////////////////////////////////////////////
// SORT() METHOD
// This method sorts the items of an array in a specific order (ascending os descending)
// ///////////////////////////////////////////////////////////////////////////////

// let numbers = [20, 40, 8, -2, 1, 5];

// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);

///////////////////////////////////////////////////////////////////////////////
// PUSH() METHOD
// This method adds zero or more elements to the end of the array
// ///////////////////////////////////////////////////////////////////////////////


// let fruits = ['apple', 'banana', 'orange'];
// console.log(`original Array`);
// console.log(fruits);



// fruits.push('mango');
// console.log(`Pushing Mango to the end`);
// console.log(fruits);

// fruits.push('pineapple', 'kiwi')

// console.log(`Pushing two fruits more to the end`);
// console.log(fruits);

// ///////////////////////////////////////////////////////////////////////////////
// FILTER() METHOD
// This method returns a new array with all elements that pass the test defined by the given function
// ///////////////////////////////////////////////////////////////////////////////

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });
// console.log(numbers);
// console.log(evenNumbers);

// //using and arrow function

// evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(numbers);
// console.log(evenNumbers);


// ///////////////////////////////////////////////////////////////////////////////
// MAP() METHOD
// This method creates a new array with the results of calling a function for every array element
// ///////////////////////////////////////////////////////////////////////////////

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let doubleNumbers = numbers.map(function (item) {
//   return item * 2;
// });

// console.log(doubleNumbers);

// //using and arrow function

// doubleNumbers = numbers.map(item => item * 2);


// ///////////////////////////////////////////////////////////////////////////////
// findindex() METHOD
// This method returns the index of the first array element that staisfies the provided text function or else returns -1
// ///////////////////////////////////////////////////////////////////////////////

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let fourIndex = numbers.findIndex(function (number) {
//   return number === 8;
// });

// console.log(fourIndex);

// // //using and arrow function

// fourIndex = numbers.findIndex(number => number === 4);


// ///////////////////////////////////////////////////////////////////////////////
// findindex() METHOD
// This method returns a new array by merging two or more values / arrays
// ///////////////////////////////////////////////////////////////////////////////

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];

// let newArray = array1.concat(array2, array3);

// console.log(newArray);

// newArray = array1.concat(4, 5, [6, 7, 8], 9);
// console.log(newArray);


// ///////////////////////////////////////////////////////////////////////////////
// every() METHOD
// This method checks if all elements in an array pass a test provided by a given function. It returns a Boolean value indicating whether all elements pass the test.
// ///////////////////////////////////////////////////////////////////////////////


// let numbers = [1, 2, 3, 4, 5, -6, 7, 8, 9, 10];

// let allGreaterThanZero = numbers.every(function (number) {
//   return number > 0;
// });

// console.log(allGreaterThanZero);

// ///////////////////////////////////////////////////////////////////////////////
//join() METHOD
//This method converts all elements of an array to strings and joins them together with a specified separator.
// ///////////////////////////////////////////////////////////////////////////////

// let letters = ['s', 'e', 'r', 'g', 'i', 'o'];

// let newArray=letters.join("-🚗-");

// console.log(newArray);

// ///////////////////////////////////////////////////////////////////////////////
//reverse() method
//this method reverses the order of the elements in an array in place and returns the reversed array.
// ///////////////////////////////////////////////////////////////////////////////

// let letters = ['g', 'o', 'i', 't', 'a', 'c', 'a', 'd', 'e', 'm', 'y'];

// letters.reverse();

// console.log(letters);

// ///////////////////////////////////////////////////////////////////////////////
//shift(): method
//This method removes the first element of an array and returns that element.
// ///////////////////////////////////////////////////////////////////////////////

// let fruits = ['apple', 'banana', 'orange', 'mango', 'pineapple', 'kiwi'];

// let shifted = fruits.shift();

// console.log(fruits);
// console.log(shifted);

// ///////////////////////////////////////////////////////////////////////////////
// slice(): method
//This method returns a new array that contains a specified portion of an array.
// ///////////////////////////////////////////////////////////////////////////////

let fruits = ['apple', 'banana', 'orange', 'mango', 'pineapple', 'kiwi'];

let newFruits = fruits.slice(0, 7);
console.log(fruits);
console.log(newFruits);