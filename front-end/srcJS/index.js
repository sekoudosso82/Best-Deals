// import { fuchsia } from "color-name"

let div = document.querySelector("div")
const ITEM_BASE_URL = "http://localhost:3000/api/v1/items"

document.addEventListener('DOMContentLoaded', function(){
  getItems()
  // getReviews()
})

function getItems() {
  fetch(ITEM_BASE_URL)
  .then(response => response.json())
  .then(items => {
    items.forEach(function(item){
      addItem(item)
    })
  })
} 

function addItem(item){
  // console.log()
  const itemDiv = document.createElement('div')

  itemDiv.className = "item-div"
  itemDiv.dataset.id = item.id

  itemDiv.innerHTML = `
    <h3>${item.name}</h3>
    <h3>${item.description}</h3>
    <img class="itemImg" alt="" src=${item.imageUrl} />
    <button data-purpose="delete">Delete</button>
    <button class="">Update</button>
    <button>Review</button>
    <ul data-id=${item.id}> </ul>
  `
  div.append(itemDiv) 
  // let ul = document.getElementById('reviews')
  let ul = document.querySelector(`[data-id='${item.id}']`)
  // ul.dataset.id = item.id
  getReviews(ul)
}

function getReviews(ul) {
  fetch('http://localhost:3000/api/v1/reviews')
  .then(response => response.json())
  .then(reviews => {
    console.log(reviews)
    reviews.forEach(function(review){
     addReview(ul, review)
    })
    
  })
} 

function addReview(ul, review)
{
    // let ul = document.getElementById('reviews')
    let li = document.createElement('li')
    li.innerHTML = ` <h2>${review.comment}</h2>`
    if (review.item_id == ul.dataset.id) {
      ul.appendChild(li)
    }
   
}



// get reviews






