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

    hideAddbox();

}

function clearList(){
    var l1 = document.getElementById("tasklist1");
    var l2 = document.getElementById("tasklist2");
    var l3 = document.getElementById("tasklist3");
    var l4 = document.getElementById("tasklist4");
    while (l1.hasChildNodes()) {
        l1.removeChild(l1.firstChild);
    }
    while (l2.hasChildNodes()) {
        l2.removeChild(l2.firstChild);
    }
    while (l3.hasChildNodes()) {
        l3.removeChild(l3.firstChild);
    }
    while (l4.hasChildNodes()) {
        l4.removeChild(l4.firstChild);
    }

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

function hideAddbox(){
    var x = document.getElementById("detailPrompt");

    x.style.display = "none";
}

function getChoice(){
    var choices = document.getElementsByName("question0");

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
          return choices[i].value;
        }
      }
}





