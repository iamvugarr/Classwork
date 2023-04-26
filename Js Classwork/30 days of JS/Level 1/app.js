const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Task 1: Use forEach to console.log each country in the countries array.
countries.forEach(elem => console.log(elem))

//--------------------------------------------

//Task 2: Use forEach to console.log each name in the names array.
names.forEach(elem => console.log(elem))

//-------------------------------------------

//Task 3: Use map to change to each name to uppercase in the names array.
const newNames = names.map(elem => elem.toUpperCase())
console.log(newNames)

//--------------------------------------------

//Task 4: Use filter to filter out countries containing land.
const filterLand = countries.filter(elem => elem.includes("land") )
console.log(filterLand);

//---------------------------------------------

//Task 5: Use filter to filter out countries containing six letters and more in the country array.
const filterSixLetter = countries.filter(elem => elem.length >= 6)
console.log(filterSixLetter)

//-------------------------------------------------

//Task 6: Use filter to filter out name start with 'E';
const filterNames = names.filter(elem => elem.startsWith("E"))
console.log(filterNames)

//----------------------------------------------

//Task 7: Use filter to filter out only prices with values.
const filterPrices = products.filter(elem => elem.price != "")
console.log(filterPrices);

//----------------------------------------------





