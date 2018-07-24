let list_id = 0;

class List { //Belongs to list.

  constructor(name) {
    this.name = name;
    this.id = ++list_id;
    store.lists.push(this);
    ListsController.renderToDOM(this);
  } // end of constructor

  getHTMLElement() { //return an element
    let div = document.createElement("div");
    div.id = `div-${this.name}`;
    div.innerHTML = `<h2>${this.name}</h2>`;

    let deleteButton = document.createElement("button");
    deleteButton.class = "delete-list";
    deleteButton.innerHTML = "X";
    deleteButton.addEventListener("click", () => {
      ListsController.delete(this);
    });

    div.appendChild(deleteButton);
    let ul = document.createElement("ul");
    ul.id = `ul-${this.id}`;
    div.appendChild(ul);
    return div;
  } //end of create element

} //end of task file
