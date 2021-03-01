const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        //Creating html elements
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');

        let bDate = document.createElement('span');
        let bPlace = document.createElement('span');
        let photograph = document.createElement('img');
        //Filling the elements
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        bDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        bPlace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        photograph.setAttribute('src', prophets[i].imageurl);
        photograph.setAttribute('alt', prophets[i].name + ' ' +prophets[i].lastname + ' ' + prophets[i].order);
        //Appending card info to the paragraph
        p.appendChild(bDate);
        p.appendChild(bPlace);
        p.appendChild(photograph);
        //Appending card elements as children of card
        card.appendChild(h2);
        card.appendChild(p);
        //Appending card as child of the generic div
        document.querySelector('div.cards').appendChild(card);
    }
  });

