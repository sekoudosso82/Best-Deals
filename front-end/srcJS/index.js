// import console = require("console");

let div = document.querySelector("div")
const ITEM_BASE_URL = "http://localhost:3000/api/v1/items"

document.addEventListener('DOMContentLoaded', function(){
  getItems()
})

function addItem(item){
  const itemDiv = document.createElement('div')

  itemDiv.className = "item-div"
  itemDiv.dataset.id = item.id

  itemDiv.innerHTML = `
    <h3>${item.name}</h3>
    <h3>${item.description}</h3>
    <img class="itemImg" alt="" src=${item.imageUrl} />
    <button data-purpose="delete">Delete</button>
    <button class="">Update</button>
    <button> Review </button>
  `
  div.append(itemDiv)
}

function getItems() {
  fetch(ITEM_BASE_URL)
  .then(response => response.json())
  .then(items => {
    items.forEach(function(item){
      addItem(item)
    })
  })
} 



