// add reviews 

document.addEventListener('click', function(){
    if (event.target.innerText === 'Review'){
        console.log ("review was cliked")
        let ul = event.target.parentNode.querySelector('ul')

        ceateNewReview(event.target)
    }       
})
function ceateNewReview(button) {
    // let bntReview = event.target
    let itemId = button.parentNode.dataset.id
    // let ul = button.parentNode.querySelector('ul')
    let newForm = document.createElement("form")
    newForm.innerHTML = `
      <label>comment:</label>
      <input type="text" name="comment" />
      <br/>
      <input class="subbnt" type="submit" value="Submit"> `
    
    button.replaceWith(newForm)
    newForm.addEventListener('submit', function(event){
      event.preventDefault()
      let comment = event.target.comment.value
      let newReview = { user_id: 1, item_id: itemId, comment: comment}
      event.target.replaceWith(button)
     // update the db
     addReviewDb(newReview)
    })
}

function addReviewDb(newReview)
{
    fetch('http://localhost:3000/api/v1/reviews', {
            method: "POST",
            headers: {
            "content-type": "application/json",
            "accept": "application/json"
            },
            body: JSON.stringify({user_id: newReview.user_id, item_id: newReview.item_id, comment: newReview.comment}) 
    })
    .then(response => response.json())
    // .then(console.log)
    .then(function(review){
        let ul = document.querySelector(`[data-id='${newReview.item_id}']`)

        addReview(ul, review)
    })
}















// if (event.target.innerText === 'Review'){
//     console.log ("review was cliked")
//     console.log(event.target.parentNode.dataset.id)
//     console.log(event.target.parentNode.querySelector('ul'))
//     let bntReview = event.target
//     let itemId = bntReview.parentNode.dataset.id
//     let ul = event.target.parentNode.querySelector('ul')
//     console.log(bntReview)
//     ceateNewReview(bntReview, itemId, ul)
// }      


    // const getReview = () => {
    //     fetch(REVIEW_BASE_URL)
    //     .then(response => response.json())
    //     .then(reviews => {
    //       addReview(reviews)
    //     })
    //   })
    

// }
// // addNewREview(review) })         
// // }
// // function addNewREview(review){
// //     const reviewLi = document.createElement('li')
// //     let itemDiv = document.querySelectorAll(`[data-id='${review.item_id}']`)
// //     console.log(itemDiv[0].querySelector('ul'))
// //     let finalDiv = itemDiv[0].querySelector('ul')
// //     reviewLi.innerHTML = ` <h2>${review.comment}</h2> `
// //     // let dsa = review.parentNode.querySelector('ul')
// //     finalDiv.appendChild(reviewLi)

// //   }