
// delete an item 

document.addEventListener('click', function(){
    if (event.target.innerText === "Delete")
    {
        console.log ("Delete was clicked")
        deleteItem(event.target)
    }       
})

function deleteItem(button) {
    let id = button.parentNode.dataset.id
    console.log(id)
    button.parentNode.remove()
    deleteItemDb(id )
}

function deleteItemDb(i)
{
    fetch(`${ITEM_BASE_URL}/${i}`, {method: "DELETE"})
    .then(response => response.json()) 
    .then(console.log)          
}