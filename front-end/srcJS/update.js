// update item
let divv = document.querySelector('div')
document.addEventListener('click', function(){
    if (event.target.innerText === 'Update'){
        console.log ('update')
        updateItem(event.target)
    }
})
function updateItem(button) {
    let id = button.parentNode.dataset.id
    console.log(button.parentNode)
    let newForm = document.createElement('form')
    newForm.innerHTML = `
      <label>name:</label>
      <input type='text' name='name' />
      <br/>
      <label>description:</label>
      <input type='text' name='description' />
      <br/>
      <label>imageUrl:</label>
      <input type='text' name='imageUrl' />
      <br/>
      <input class="subbnt" type="submit" value="Submit">

    `
    button.replaceWith(newForm)
    const itemDiv = document.createElement('div')
    itemDiv.className = 'item-div'
    itemDiv.append(newForm)
    document.body.prepend(itemDiv )
    newForm.addEventListener('submit', function(event){
      event.preventDefault()
      let name = event.target.name.value
      let description = event.target.description.value
      let imageUrl = event.target.imageUrl.value
      let newItem = {name: name, description: description, imageUrl: imageUrl}
      itemDiv.remove()
      updateItemDb(newItem, id)
    })
}
function updateItemDb(newItem, id)
{
    fetch(`http://localhost:3000/api/v1/items/${id}`, {
            method: 'PATCH',
            headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
            },
            body: JSON.stringify({name: newItem.name, description: newItem.description, imageUrl: newItem.imageUrl})
    })
    .then(response => response.json())
    .then(item => {
        let divItem = document.querySelectorAll(`[data-id='${id}']`)
        console.log(divItem)
        divItem[0].innerHTML=`
        <h3>${item.name}</h3>
        <h3>${item.description}</h3>
        <img class='itemImg' alt='' src=${item.imageUrl} />
        <button data-purpose='delete'>Delete</button>
        <button class=''>Update</button>
        <button> Review </button>
        <ul data-id=${item.id}> </ul>`
    })
}
