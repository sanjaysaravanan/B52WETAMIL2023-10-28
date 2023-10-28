// forEach

const arr = [1, 2, 3, 4, 5];

// Print the square values for above numbers
// O/P:
// 1
// 4
// 9
// 16
// 25

// for (let val of arr) {
//   console.log(val * val);
// }

const func = (val, index) => {
  console.log(index, val * val);
};

// forEach
arr.forEach(func);

arr.forEach((val, index) => {
  console.log(index, val * val);
});

const returnVal = arr.forEach(function (a, b) {
  console.log(b, a * a);
});

console.log(returnVal);

// Map
// Create a new array with squares of the above values
// O/P: [1, 4, 9, 16, 25]
// without using map function
let i = 0;
const newArr = [];
for (let val of arr) {
  newArr[i++] = val * val;
}

console.log(newArr);

// with using map
const newArrMap = arr.map(function (val) {
  return val * val;
});
console.log(newArrMap);

// Filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// filter all the values that are odd
// O/P [1,3,5,7,9]

let i = 0;
let newArr = [];
// without using filter
for (let val of arr) {
  if (val % 2 === 1) {
    newArr[i++] = val;
  }
}

console.log(newArr);

// using filter
const newArr = arr.filter((val) => {
  return val % 2 === 1;
});

console.log(newArr);

const arrObjs = [
  { name: "Aravind" },
  { name: "Sam" },
  { name: "Sanjay" },
  { name: "Aravind" },
];

// expect aravind all should be in a new array
const newArr = arrObjs.filter((val) => {
  return val.name !== "Aravind";
});

const newArr = arrObjs.filter((val) => {
  return val.name === "Aravind";
});

// get only the object which has name aravind
const obj = arrObjs.find((val) => {
  return val.name === "Aravind";
});

// findIndex
const index = arrObjs.findIndex((val) => {
  return val.name === "Aravind";
});

// reduce -- accumulation of values

const values = [99, 88, 77, 66];

// using reduce function
const accumulatedValue = values.reduce((preVal, currVal) => {
  return currVal + preVal;
});

// preVal = 99, currVal = 88 --> return 99 + 88; ---> 187
// preVal = 187, currVal = 77 --> return 187 + 77; ---> 264
// preVal = 264, currVal = 66 --> return 264 + 66; ---> 330
// accumulatedValue = 330

const accumulatedValue = values.reduce((preVal, currVal) => {
  return currVal + preVal;
}, 0);

// preVal = 10, currVal = 99 --> return 0 + 99; ---> 99
// preVal = 99, currVal = 88 --> return 99 + 88; ---> 187
// preVal = 187, currVal = 77 --> return 187 + 77; ---> 264
// preVal = 264, currVal = 66 --> return 264 + 66; ---> 330
// accumulatedValue = 330

const marks = [
  { sub: "maths", mark: 99 },
  { sub: "eng", mark: 88 },
  { sub: "sci", mark: 77 },
  { sub: "soc", mark: 66 },
];

// find total marks

const totalMarks = marks.reduce((preVal, currVal) => {
  return currVal.mark + (typeof preVal === "object" ? preVal.mark : preVal);
});

const totalMark = marks.reduce((preVal, currVal) => {
  return currVal.mark + preVal;
}, 0);

console.log(totalMarks);
console.log(totalMark);
