fetch('https://randomuser.me/api/?results=12&nat=us&inc=name,email,phone,location,dob,picture&noinfo')
  .then(response => response.json())
  .then(dataObj => dataObj.results)
  .then(data => generateEmployees(data))
  .catch(error => console.log("oopsie", error));


function generateEmployees(data){
console.log(data);
  const grid = document.getElementById('grid-container');

  for (var i = 0; i < data.length; i++) {

    let empName = `${data[i].name.first} ${data[i].name.last}`;

    let card = document.createElement('div');
    card.className = 'card grid';
    card.id = i + 1;
    card.setAttribute('onclick', `displayModal(event, 'card-${i+1}')`)
    grid.appendChild(card);

    let img = document.createElement('img');
    img.className = 'avatar';
    img.src = data[i].picture.large;
    img.alt = name;
    card.appendChild(img);

    let textContainer = document.createElement('div');
    textContainer.className = 'text-container';
    card.appendChild(textContainer);

    let h3 = document.createElement('h3');
    h3.className = 'name';
    h3.textContent = empName;
    textContainer.appendChild(h3);

    let para1 = document.createElement('p');
    para1.className = 'email';
    para1.textContent = data[i].email;
    textContainer.appendChild(para1);

    let para2 = document.createElement('p');
    para2.className = 'phone';
    para2.textContent = data[i].phone;
    textContainer.appendChild(para2);
  };
  generateModal(data)
}

function generateModal(data) {
  const overlay = document.getElementById('overlay');
  for (var i = 0; i < data.length; i++) {
    let empName = `${data[i].name.first} ${data[i].name.last}`;

    let card = document.createElement('div');
    card.className = 'modal hidden';
    card.id = 'card-' + (i + 1);
    overlay.appendChild(card);

    let closer = document.createElement('span');
    closer.id = 'modal-close';
    closer.setAttribute('onclick', `closer('card-${i + 1}')`);
    closer.textContent = 'X';
    card.appendChild(closer);

    let modal = document.createElement('div');
    modal.className = 'modal-content';
    card.appendChild(modal);

    let img = document.createElement('img');
    img.className = 'avatar';
    img.src = data[i].picture.large;
    img.alt = name;
    modal.appendChild(img);

    let textContainer = document.createElement('div');
    textContainer.className = 'text-content';
    modal.appendChild(textContainer);

    let h3 = document.createElement('h3');
    h3.className = 'name';
    h3.textContent = empName;
    textContainer.appendChild(h3);

    let para1 = document.createElement('p');
    para1.className = 'email';
    para1.textContent = data[i].email;
    textContainer.appendChild(para1);

    let para2 = document.createElement('p');
    para2.className = 'city';
    para2.textContent = data[i].location.city;
    textContainer.appendChild(para2);

    let line = document.createElement('hr');
    textContainer.appendChild(line);

    let para3 = document.createElement('p');
    para3.className = 'phone';
    para3.textContent = data[i].phone;
    textContainer.appendChild(para3);

    let para4 = document.createElement('p');
    para4.className = 'address';
    para4.textContent = `${data[i].location.street.number} ${data[i].location.street.name}, ${data[i].location.city}, ${data[i].location.state} ${data[i].location.postcode}`;
    textContainer.appendChild(para4);

    let para5 = document.createElement('p');
    para5.className = 'dob';
    para5.textContent = data[i].dob.date.slice(0, 10).replaceAll('-', '/');
    textContainer.appendChild(para5);
  };
}
