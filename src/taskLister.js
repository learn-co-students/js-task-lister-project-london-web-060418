//defined in the global scope:
let allLists = []

class TaskLister {
  // this.all = []

  constructor(title) {
    this.title = title;
    allLists.push(this);
  }

  static delete(listItem){
    let index = allLists.indexOf(listItem);
    allLists.splice(index, 1);
  }
}






  // listItem(){
  //   let h2 = document.createElement("h2");
  //   h2.innerText = this.text;
  //   h2.setAttribute("class", "list-title");
  //   let button = document.createElement("button");
  //   button.setAttribute("data-description", this.text);
  //   button.innerText = "x"
  //   h2.appendChild(button);
  //   return h2;
  // }
// }
