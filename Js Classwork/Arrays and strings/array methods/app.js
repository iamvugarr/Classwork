//Task 1: Arraydeki elementleri + ile birlesdirmek
let arr = [4, 9, 3, 78];

let newArr = arr.join("+");

console.log(newArr);

//---------------------------------------

//Task 2: Stringdeki elemtleri eks case-e cevirmek
let str = "cOmE oN cheElSeA";

let newStr = str.split("");

newStr.forEach((elem, index) => {
  if (newStr[index] == newStr[index].toLowerCase()) {
    newStr[index] = newStr[index].toUpperCase();
  } else if (newStr[index] == newStr[index].toUpperCase()) {
    newStr[index] = newStr[index].toLowerCase();
  }
});

console.log(newStr.join(""));

//------------------------------------

//Task 3:
const colors = ["Blue", "Green", "Red", "White", "Orange", "Purple", "Yellow"];

colors.forEach((elem, index) => {
  console.log(`${index + 1} color is ${colors[index]}`);
});

//-----------------------------------

//Task 4: Verilen elementi arrayden silmek
const numbers = [];

function removeEelem(arr, elem) {
  arr.forEach((item, index) => {
    if (elem != arr[index]) {
      numbers.push(arr[index]);
    }
  });
  console.log(numbers);
}

removeEelem([5, 85, 36, 23, 58, 621, 23, 4], 23);

//----------------------------------

//Task 5:Arrayin icindeki elementlerin kvadratini tapmaq
let nums = [54, 312, 987, 799, 4, 6];

nums = nums.map((elem, index) => {
  return elem ** 2;
});

console.log(nums);

//------------------------------------

//Task 6: Yasi 50-den asagi olanlari gostermek
let input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

let ages = [];

input = input.filter((elem, index) => {
  if (elem.age <= 50) {
    ages.push(elem.age);
  }
});

console.log(ages);

//----------------------------------------

//Task 7: Create invert()
const numbers2 = [-2, 9, -8, 5];
const invertedArr = [];

function invert(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * -1;
    invertedArr.push(arr[i]);
  }
  console.log(invertedArr)
}

invert(numbers2)

//---------------------------------------

//Task 8: Sozde "a" ve ya "e" herfi varsa sum artsin

const names2 = [Faride, Gunel]

let sum = 0;

