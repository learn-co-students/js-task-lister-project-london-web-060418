document.addEventListener('DOMContentLoaded', function(e){
  console.log('this file is linked')
})

document.getElementById("list-container").addEventListener("click",function(e) {
// e.target was the clicked element
  if (e.target.className === 'Delete-List-Button') {
    // console.log("Anchor element clicked!");
    let targetId = e.target.id
    let elementToRemove = e.target.parentNode
    document.getElementById("list-container").removeChild(elementToRemove)
    deleteOption(targetId)
    deleteList(targetId)
  }
});

const allLists = []
let id = 0

class List {
  constructor(name) {
    this.name = name
    id = ++id
    this.id = id
    allLists.push(this)
  }
}; // class


(function renderList(){
  const submitList = document.getElementById("submitList")
  submitList.addEventListener("click", (e) => {
    e.preventDefault()
    createList()
    createListContainer()
    addOption()
  })
})()

function getListName(){
  let name = document.getElementById("new-list-title").value
  return name
}

function setListId(){
  return allLists[allLists.length -1].id
}

function createList(){
  let newList = new List(getListName())
}

function createListContainer(){
  let nameElement = document.createElement('p')
  nameElement.innerText = getListName()

  let element = document.createElement('div')
  element.id = `container-${setListId()}`
  element.appendChild(nameElement)
  element.appendChild(createDeleteButton())
  document.getElementById("list-container").appendChild(element)
}

function addOption(){
  let parent = document.getElementById("parent-list")
  let element = document.createElement('option')
  element.id = setListId()
  element.innerText = getListName()
  parent.appendChild(element)
}

function createDeleteButton(){
  let deleteButton = document.createElement('button')
  deleteButton.innerText = "Delete"
  deleteButton.id = setListId()
  deleteButton.className = "Delete-List-Button"
  return deleteButton
}

function deleteOption(targetId){
  let options = document.getElementsByTagName('option')
  for (let option of options) {
  if (option.id == targetId){
      option.parentNode.removeChild(option)
    }
  }
}

function deleteList(id){
  for (let i=0; i < allLists.length; i++) {
    if (allLists[i].id == id) {
      allLists.splice(i, 1);
      console.log(allLists)
    }
  }
}
