var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

form.addEventListener('submit' , addItem )
itemList.addEventListener('click' , removeItem)
filter.addEventListener('keyup' , filterItem)

function addItem (e) {
    e.preventDefault()

    var newItem = document.getElementById('item')

    var li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem.value))
    itemList.appendChild(li)
    
    var del = document.createElement('button')
    del.className = 'btn btn-danger float-right'
    del.appendChild(document.createTextNode('X'))
    li.appendChild(del)
}

function removeItem(e){
    e.preventDefault()

    if(e.target.classList.contains('delete')) {
        if(confirm('are you sure ? ')) {
            var li = e.target.parentElement
            console.log(e.target.parentElement)
            itemList.removeChild(li)
        }
    }
}

function filterItem(e) {
    e.preventDefault()

    var text = e.target.value.toLowerCase()

    var items = itemList.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        var itemname = item.firstChild.textContent
        if(itemname.toLowerCase().indexOf(text) != -1){
            item.style.display ='block'
        }else {
            item.style.display = 'none'
        }
    })    

}

