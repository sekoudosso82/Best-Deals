let div = document.querySelector("div")
const BASE_URL = "http://localhost:3000/api/v1/items"

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
    <button data-purpose="delete">X</button>
    <button class="">Update</button>
    <button> Review </button>
  `

  div.append(itemDiv)
}

function getItems() {
  fetch(BASE_URL)
  .then(response => response.json())
  .then(items => {
    items.forEach(function(item){
      addItem(item)
    })
  })
}

// const BaseUrl = ("http://localhost:3000/api/v1")
// const userUrl = ("http://localhost:3000/api/v1/users")
// const itemUrl = ("http://localhost:3000/api/v1/items")
// const reviewUrl = ("http://localhost:3000/api/v1/reviews")

// const userForm = document.getElementById('log-in')

// document.addEventListener("DOMContentLoaded", event => {
//     getUserData()
    
    
// })

// const getUserData = () => {
//     fetch(userUrl)
//     .then(response => response.json())
//     .then(data => {
//        const signIn = (user) => {
//         userForm.addEventListener('submit', event => {
//         event.preventDefault()
//         if (event.target[0].value === data.user_name)

//             })
//         }
//     })
    
// }

//BODY.INNERHTML
//  <div>
// <div class="jumbotron jumbotron-fluid">
//     <div class="container">
//     <h1 class="display-4">Best Deals</h1>
//     <p class="lead">Best Deals you will find locally</p>
//         <div>
//             <img src="https://img.icons8.com/nolan/96/money.png"/>
//         </div>
//     </div>
// </div>
// <br>
// <form id="log-in" action="/action_page.php">
// <label for="username">Username:</label>
// <input type="text" id="log-in" name="username" placeholder="username" value="">
// <input type="submit" value="Submit">
// </form>
// </div> 

//Bootstrap
//CSS
/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link> */

/* <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script> */





    
