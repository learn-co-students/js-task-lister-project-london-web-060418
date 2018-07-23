document.addEventListener('DOMContentLoaded', () => {
  // grab DOM elements
  const listDiv = document.getElementById("app-content")
  const listForm = document.getElementById('create-list-form')
  const listTitleInput = document.getElementById('new-list-title')
  const listList = document.getElementById('lists')
  const taskForm = document.getElementById('create-task-form')
  const taskOptionSelect = document.getElementById('parent-list')
  const taskDescriptionInput = document.getElementById('new-task-description')
  const taskPriorityInput = document.getElementById('new-task-priority')

  const listObj = {}
  let listIdCounter = 0

  listForm.addEventListener('submit', createList)
  taskForm.addEventListener('submit', createTask)

  function createList(e) {
    e.preventDefault()
    const newList = document.createElement('div')
    const title = listTitleInput.value

    newList.id = `list-${++listIdCounter}`

    newList.innerHTML = `
      <h2>${title}
        <button data-title="${listIdCounter}" class="delete-list">
          X
        </button>
      </h2>
      <ul></ul>`

    listList.append(newList)

    listObj[`list-${listIdCounter}`] = title

    const deleteBtn = newList.querySelector('h2 button.delete-list')
    deleteBtn.addEventListener('click', deleteList)
    updateOptionSelect()
  }

  function deleteList(e) {
    //Event's path, 2nd element from the array, then remove
    e.path[2].remove()  //deletes the html element
    delete listObj[e.path[2].id]  //deletes from the listObj
    updateOptionSelect()
  }

  function updateOptionSelect() {
    //empties all options
    while (taskOptionSelect.hasChildNodes()) {
      taskOptionSelect.removeChild(taskOptionSelect.firstChild)
    }
    //iterates thru listObj and lists the options:
    for (let key in listObj) {
      const newOption = document.createElement('option')
      newOption.value = key
      newOption.innerText = listObj[key]
      taskOptionSelect.append(newOption)
    }
  }

  let taskIdCounter = 0

  function createTask(e) {
    e.preventDefault()
    const list = document.querySelector(`#${taskOptionSelect.value} ul`)
    const newTask = document.createElement('li')
    newTask.id = `task-${++taskIdCounter}`
    newTask.innerHTML = `
      Task: ${taskDescriptionInput.value}
        <button data-title="${taskIdCounter}" class="delete-task">
          X
        </button>
        <br>
        Priority: ${taskPriorityInput.value}`

    list.append(newTask)

    const deleteBtn = newTask.querySelector('li button.delete-task')
    deleteBtn.addEventListener('click', deleteTask)

    // console.log(list);
    // console.log(taskDescriptionInput.value);
    // console.log(taskPriorityInput.value);
  }

  function deleteTask(e) {
    console.log(e)
    //Event's path, 2nd element from the array, then remove
    e.path[1].remove()  //deletes the html element
  }
});
