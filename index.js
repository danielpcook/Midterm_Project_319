function addItem(){
    var name = document.getElementById("task-name").value;
    var date = document.getElementById("task-date").value;
    var rates = document.getElementById('cat').value;

    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(name));

    document.getElementById("main-task-list").appendChild(newItem);

    outputList.appendChild(listItem);
    document.getElementById("task-name").value = "";

}

function taskDetails(name,dateCreated,dueDate){
    this.name = name;
    this.dateCreated = dateCreated;
    this.dueDate = dueDate;
}

function revealAddbox(){
    var x = document.getElementById("detailPrompt");

    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "block";
      }
}

function getCheckedValue(name) {
    var cat = document.getElementsByName(name);
    for (var y = 0; y < cat.length; y++)
        if (cat[y].checked) return cat[y].value;
}
function getCategory() {
    if(getCheckedValue(question0) === 'A'){
        return "Work";
    }
    if(getCheckedValue(question0) === 'B'){
        return "School";
    }
    if(getCheckedValue(question0) === 'C'){
        return "Lifestyle";
    }
    if(getCheckedValue(question0) === 'D'){
        return "Other/Miscellaneous";
    }

    
}

