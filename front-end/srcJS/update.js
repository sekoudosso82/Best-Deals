
// add new item 
let divv = document.querySelector("div")
document.addEventListener('click', function(){
    if (event.target.innerText === "Update"){
        console.log ("update")
        updateItem(event.target)
    }       
})

function updateItem(button) {
    let id = button.parentNode.dataset.id
    
    let newForm = document.createElement("form")
    newForm.innerHTML = `
      <label>name:</label>
      <input type="text" name="name" />
      <br/>
      <label>description:</label>
      <input type="text" name="description" />
      <br/>
      <label>imageUrl:</label>
      <input type="text" name="imageUrl" />
      <br/>
      <input type="submit" />
    `
    const itemDiv = document.createElement('div')
    itemDiv.className = "item-div"
    itemDiv.append(newForm)
    document.body.prepend(itemDiv )
    newForm.addEventListener('submit', function(event){
      event.preventDefault()
      let name = event.target.name.value
      let description = event.target.description.value
      let imageUrl = event.target.imageUrl.value
      
      let newItem = {name: name, description: description, imageUrl: imageUrl}
      
    //   newForm.remove()
      itemDiv.remove()
     // update the db
      updateItemDb(newItem, id)
    })
    
}

function updateItemDb(newi, i)
{
    fetch(`http://localhost:3000/api/v1/items/${i}`, {
            method: "PATCH",
            headers: {
            "content-type": "application/json",
            "accept": "application/json"
            },
            body: JSON.stringify({name: newi.name, description: newi.description, imageUrl: newi.imageUrl}) 
    })
    .then(response => response.json())
    .then(console.log)               
}