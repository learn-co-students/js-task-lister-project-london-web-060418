document.addEventListener('DOMContentLoaded', () => {
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const listContainer = document.createElement("div");
  const form = document.getElementById('create-list-form');
  const parentList = document.createElement("div");
  parentList.setAttribute("id", "lists");
  listDiv.append(parentList)

  form.addEventListener('submit', function(event){
    event.preventDefault();
    submitList();
    console.log('hi');
  });

  function submitList() {
    let listTitle = document.querySelector("#new-list-title");
    let list_obj = new TaskLister(listTitle.value);
    listTitle.value = "";
    createList(list_obj)
    console.log(list_obj);
  }

  function createList(list_obj) {
    let newList = document.createElement("div");
    newList.innerHTML = `${list_obj.title} `
    newList.id = list_obj.title
    parentList.append(newList)
    let button = document.createElement("button");
    button.setAttribute("data-description", this.text);
    button.innerText = "x"
    newList.appendChild(button);
    button.addEventListener("click", function(event) {
      newList.remove();
      TaskLister.delete(list_obj);
      populateOptions();
    })
    populateOptions();
  }

  function populateOptions() {
    //for each element of the
    let parent = document.querySelector('#parent-list');
    parent.innerHTML = ""
    allLists.forEach(element => {
      let listOption = document.createElement('option')
      listOption.value = element.title
      listOption.text = element.title
      parent.append(listOption)
      // addTask();
    })
  }

  function submitTask() {
    let taskDescription = document.querySelector("#new-task-description");
    let task_obj = new Task(taskDescription.value);
    taskDescription.text = "";
    createTask(task_obj)
    console.log(task_obj);
  }

  document.querySelector("#task-button").addEventListener("click", function(e) {
    e.preventDefault();
    submitTask();hs
    console.log("hdcjbdbsvi")
  })

  function createTask(task_obj) {
    console.log('arrr')
    // where select id === newList.id, do this:
    if (newList.id === select.id) {
      let newTask = document.createElement("li");
      newTask.innerHTML = `${task_obj.text} `
    }
    // parentList.append(newTask)
    let button = document.createElement("button");
    button.setAttribute("data-description", this.text);
    button.innerText = "x"
    newTask.appendChild(button);
    button.addEventListener("click", function(event) {
      newTask.remove();
      TaskLister.delete(task_obj);
      populateOptions();
    })
    populateOptions();
  }

});
