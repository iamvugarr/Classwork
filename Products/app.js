const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const filterProduct = document.querySelector(".filter-btn");

const row = document.querySelector(".products-row");

fetch("https://northwind.vercel.app/api/products")
  .then((resp) => resp.json())
  .then((data) => createProduct(data));

function createProduct(product) {
  let cardDisplay = ``;
  product.forEach((element) => {
    cardDisplay += `
               <div class="product">
                    <div class="column">
                         <h1>Id: ${element.id}</h1>
                         <h2>Name: ${element.name}</h2>  
                         <h3>Unit Price: ${element.unitPrice}</h3>
                         <button class="delete-btn">Delete</button>
                    </div>
               </div>
          `;
    const deleteBtn = document.querySelectorAll(".delete-btn");
    deleteBtn.forEach((item) => {
      console.log(item);
      item.addEventListener("click", () => {
        item.parentElement.parentElement.remove();
      });
    });

    row.innerHTML = cardDisplay;
  });
}
