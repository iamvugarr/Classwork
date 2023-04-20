// --------------- Palidrome -----------------

let num = 1746;
let ters = 0;
let tempNum = num;

while (num > 0) {
  let qaliq = num % 10;
  ters = ters * 10 + qaliq;
  num = parseInt(num / 10);
}

if (tempNum == ters) {
  console.log("true");
} else {
  console.log("false");
}

// -------------------- Find numbers digits ------------------------------

let count = 1;
function findDigits(number) {
  if (number >= 10) {
    while (parseInt((number /= 10)) >= 1) {
      count++;
    }
  }
  console.log(count);
}

findDigits(87);

// ------------------------ Find the longest ----------------------------

function longestWord(string) {
     let str = string.split(" ");
     let longest = 0;
     let word = '';
     for (let i = 0; i < str.length; i++) {
         if (longest < str[i].length) {
             longest = str[i].length;
             word = str[i];
         }
     }
     return word;
 }

console.log(longestWord("Salam 33 yasim var rtdj[0[]kp-]k"))





