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

//Task 7: Stringdeki sozlerin ilk ve son herfini saxlayib ortada qalan sozlerin ise cemini birlesdirib yazmaq
const sentence = "Every developer likes to mix kubernetes and javascript";

let words = sentence.split(" ");

words.forEach((elem, index) => {
  console.log(elem[0].concat(`${elem.length - 2}`).concat(`${elem[elem.length - 1]}`));
});


//--------------------------------------

//Task 8: Ortalamani cixarmaq

const products = [
  {name: 'Product 1', price: 20, category: 'Electronics'},
  {name: 'Product 2', price: 30, category: 'Clothes'},
  {name: 'Product 3', price: 30, category: 'Electronics'},
  {name: 'Product 4', price: 40, category: 'Clothes'},
  {name: 'Product 5', price: 50, category: 'Clothes'},
  {name: 'Product 6', price: 60, category: 'Electronics'},
  {name: 'Product 7', price: 70, category: 'Clothes'},
  {name: 'Product 8', price: 80, category: 'Electronics'}
]



