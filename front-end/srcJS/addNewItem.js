
// add new item 

document.addEventListener('click', function(){
    if (event.target.innerText === "Add New Item"){
        console.log ("ok")
        let button = event.target
        
        console.log(button)
        ceateNewItem(button)
    }       
})

function ceateNewItem(button) {
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
      <input class="subbnt" type="submit" value="Submit">
      
    `
    const itemDiv = document.createElement('div')
    itemDiv.className = "item-div"
    itemDiv.append(newForm)
    button.remove()
    document.body.prepend(itemDiv)
    
    newForm.addEventListener('submit', function(event){
      event.preventDefault()
      let name = event.target.name.value
      let description = event.target.description.value
      let imageUrl = event.target.imageUrl.value
      
      let newItem = { name: name, description: description, imageUrl: imageUrl, user_id: 1}
  
      itemDiv.remove()
      let li = document.getElementById('addLi')
      li.append(button)
     // update the db
      updateDb(newItem)
    })
    
}

function updateDb(item)
{
    fetch(ITEM_BASE_URL, {
            method: "POST",
            headers: {
            "content-type": "application/json",
            "accept": "application/json"
            },
            body: JSON.stringify(item) 
    })
    .then(response => response.json())
    // .then(console.log)
    .then(function(item){ addItem(item) })         
}