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

// ----------------------------------------------LEVEL 2-------------------------------------------

//Task 1: Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const filterPrice = products.filter(elem => elem.price != "")
console.log(filterPrice);
const sumPrice = filterPrice.reduce((a,b)=>a+b.price,0)
console.log(sumPrice)

//-----------------------------------------------

//