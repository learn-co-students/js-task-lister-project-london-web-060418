class TasksController {

  static init() {
    //intialize the eevent listeners
    let create_task_form = document.querySelector("#create-task-form");
    create_task_form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.createNewTask(e);
    });
  }

  static createNewTask(e) {
    console.log(e);
    let description = e.target.description.value;
    let priority = e.target.priority.value;
    let list_id = e.target.listid.value;

    let t = new Task(list_id, description, priority);
  }

  static deleteById(taskToDelete) {
    let taskObj = geTaskById(taskToDelete);
    this.delete(taskObj);
  }

  static delete(taskObj) { //delete object
      let indexToDelete = store.tasks.findIndex(element => element === taskObj);
      if(indexToDelete > -1) {
        store.tasks.splice(indexToDelete, 1);
        console.log("Deleted Task element from Store.");
      } else {
        console.log("Element not found in store");
      }
  }

  static getTaskById(taskId) {
    taskId = parseInt(taskId);
    return store.tasks.find(e => e.id === taskId);
  }

  static renderToDOM(taskObj){
    this.getListContainer(taskObj.list_id).appendChild(taskObj.getHTMLElement());
  }

  static getListContainer(list_id) { //should get the list div
    let listObj =  ListsController.getListById(list_id);
    console.log(listObj)
    return document.querySelector(`#ul-${listObj.id}`);
  }

}
