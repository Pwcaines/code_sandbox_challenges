/*
  Below are some code challenges to test your understanding of arrays, higher-order methods, and DOM manipulation.
  Hints that contain angle brackets (<>) containing some text are placeholders. Remove both the angle brackets and the text inside it in your actual implementation.
  To do the DOM manipulation challenges, this .js file has already been linked to index.html
*/

/* 
Challenge #1: Using the list of numbers array,
add numbers from 1 - 10, inclusive, to the array.
*/
const listOfNumbers = [];
// Solution starts here
for (let i = 1; i <= 10; i++) {
  listOfNumbers.push(i);
}
console.log(listOfNumbers);
// ------------------------

/*
 Challenge #2: Using the listOfEvenNumbers array,
 add even numbers from 1 - 20, inclusive, to the array.
 */
const listOfEvenNumbers = [];
// Solution starts here
for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    listOfEvenNumbers.push(i);
  }
}
console.log(listOfEvenNumbers);
// ------------------------

/*
  Challenge #3: Using the array below,
  modify the elements of the array to 
  the string representative.
  For example, 1 becomes "one", 2 becomes "two", and 3 becomes "three"
  HINT: Feel free to implement it however you like. That said, try to do it using the map method.
 */
const numbers1 = [1, 2, 3];
// Solution starts here
const map1 = numbers1.map(function (i) {
  if (i === 1) {
    return "one";
  } else if (i === 2) {
    return "two";
  } else if (i === 3) {
    return "three";
  } else {
    return "null";
  }
});
console.log(map1);
// ------------------------

/*
  Challenge #4: Using the array below,
  filter the even elements out of the array
  and square each even element in the final output.
  HINT: You can use the filter method on the original array, then the map method on the output of the filter method.
*/
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Solution starts here
const even = numbers2.filter((x) => x % 2 === 0);
/*const even = numbers2.filter(function(x) {
    if (x % 2 === 0) {
        return x
    }
}) */
console.log(even);
const squared = even.map((x) => x ** 2);
console.log(squared);
// ------------------------

// DOM Manipulation Challenges
/*
  Challenge #5: Create a <div> child element, and insert it into the <body> parent element
  HINT: To create element, use document.createElement(<ELEMENT_NAME>).
  To insert element, use <PARENT_ELEMENT>.appendChild(<CHILD_ELEMENT>)
*/
// Solution starts here
const newElement = document.createElement("div");
document.body.appendChild(newElement);
console.log(newElement);
console.log(newElement.parentElement);
// ------------------------

/*
  Challenge #6: Create an unordered list (<ul>) element, 
  then loop over the listOfNames array and, in each iteration:
    1. create a list element (<li>)
    2. insert the name at the current iteration of the array to the <li> element (note: you can use <ELEMENT>.innerText = "<NAME>")
    3. add the <li> element to the <ul> element
  Then, after the loop, add the <ul> element to the <body> element.
  NOTE: At the end, you should have 4 <li> elements and 1 <ul> element.
*/
const listOfNames = ["Ryan", "Adam", "Paul", "Chris"];
// Solution starts here

// ------------------------
