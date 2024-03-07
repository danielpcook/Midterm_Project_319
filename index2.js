fetch("./data.JSON")
.then(response => response.json())
.then(data => {
    
    const examples = data.examples;

    let i = 0;
    examples.forEach(image => {
      i = i + 1;
      const imageListElement = document.getElementById('example' + i);
      const li = document.createElement('li');
      li.innerHTML = `
      <p></p>
        <img src=${image.url} alt="${image.title} Image" width="900" border="2px solid">
        <p><strong>${image.title}</strong> ${image.description}<hr></p>
        `;
      imageListElement.appendChild(li);
    });
  })