fetch("./data.JSON")
.then(response => response.json())
.then(data => {
    
    const categories = data.categories;

    let i = 0;
    categories.forEach(image => {
      i = i + 1;
      const imageListElement = document.getElementById('tasklist' + i);
      const li = document.createElement('li');
      li.innerHTML = `
      <p></p>
        <img src=${image.url} alt="${image.title} Image" width="100">
        <p><strong>${image.title}</strong> ${image.description}<hr></p>
        `;
      imageListElement.appendChild(li);
    });
  })


function addItem(){
    var name = document.getElementById("task-name").value;
    var date = document.getElementById("task-date").value;
    var assignment = getChoice();

    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode("-" + name + ", do by: " + date));

    document.getElementById(assignment).appendChild(newItem);

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

function getChoice(){
    var choices = document.getElementsByName("question0");

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
          return choices[i].value;
        }
      }
}




