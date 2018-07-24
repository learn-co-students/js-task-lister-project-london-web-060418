class ListsController {

  static init() {
    //intialize the eevent listeners
    let create_list_form = document.querySelector("#create-list-form");
    create_list_form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(e);
      this.createNewList(e);
    });
  }

  static createNewList(e) {
    console.log(e);
    let name = document.querySelector("#new-list-title").value;
    let list_name = e.target.name.data;
    let l = new List(name);
  }

  static getListsViewContainer() {
    return document.querySelector("#lists");
  }

  static deleteById(listId) {
    let listObj = getListById(listId);
    this.delete(listObj);
  }

  static delete(listObj) { //delete object
      let indexToDelete = store.lists.findIndex(element => element === listObj);
      if(indexToDelete > -1) {
        this.deleteAssociatedTasks(listObj);

        let selectOption = document.querySelector(`#select-option-${listObj.id}`);
        let listDiv = document.querySelector(`#div-${listObj.name}`);
        selectOption.parentNode.removeChild(selectOption);
        listDiv.parentNode.removeChild(listDiv);

        store.lists.splice(indexToDelete, 1);
        console.log("Deleted list element from Store.");
      } else {
        console.log("Element not found in store");
      }
  }

  static deleteAssociatedTasks(listObj) {
    this.getAssociatedTasks(listObj).forEach((e) => {
      console.log("Deleting Task with ID: " + `${e.id}`);
      TasksController.delete(e);
    });
  }

  static getAssociatedTasks(listObj) {
    return store.tasks.filter(element => parseInt(element.list_id) === parseInt(listObj.id));
  }

  static getListById(listId) {
    listId = parseInt(listId);
    return store.lists.find(e => e.id === listId);
  }

  static renderToDOM(listObj){
    let selectElement = document.querySelector("#create-task-list-select");
    let optionElement = this.getSelectOptionElement(listObj);
    selectElement.appendChild(optionElement);
    this.getListsViewContainer().appendChild(listObj.getHTMLElement());
  }

  static getSelectOptionElement(listObj) {
    let option = document.createElement("option");
    option.id = `select-option-${listObj.id}`;
    option.value = `${listObj.id}`;
    option.name = `${listObj.name}`;
    option.innerHTML = `<p>${listObj.name}</p>`;
    console.log(option);
    return option;
  }

}
