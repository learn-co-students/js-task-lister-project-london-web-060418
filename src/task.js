let task_id = 0;

class Task { //Belongs to list.

  constructor(list_id, description, priority = "low") {
    this.list_id = parseInt(list_id);
    this.description = description;
    this.priority = priority;
    this.id = ++task_id;
    store.tasks.push(this);
    TasksController.renderToDOM(this);
  } // end of constructor

  getHTMLElement() {
    let li = document.createElement("li");
    li.innerHTML = `<p>Description: ${this.description}</p>` + `<p>Priority: ${this.priority}</p>`;
    let deleteButton = document.createElement("button");
    deleteButton.class = "delete-task";
    deleteButton.innerHTML = "X";
    deleteButton.addEventListener("click", () => {
    li.parentNode.removeChild(li);
    TasksController.delete(this);
    });
    li.appendChild(deleteButton);
    return li;
  }

} //end of task file
