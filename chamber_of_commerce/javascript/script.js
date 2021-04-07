//Last Modified Function
window.addEventListener('load', (event) => {
        document.getElementById("lastModifiedDate").innerText = "Last time modified: " + document.lastModified;
});

//Callable Functions
function toggleMenu() {
    document.getElementById("menu").classList.toggle("hide");
}

function loadDirectory() {
    fetch("directory.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const directory = jsonObject['business'];
        for (let i = 0; i < directory.length; i++ ) {
            //Creating html elements
            let card = document.createElement('section');
            let div = document.createElement('div');
            let img = document.createElement('img');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let a = document.createElement('a');

            //Filling the elements
            card.setAttribute('class', "card");
            img.setAttribute('src', directory[i].logo);
            img.setAttribute('alt', directory[i].name + " logo");
            h2.textContent = directory[i].name;
            p.textContent = directory[i].phone;
            a.textContent = directory[i].name + " Website";
            a.setAttribute("href", directory[i].link);
            //Appending card elements as children of card
            card.appendChild(img);
            card.appendChild(div);
            div.appendChild(h2);
            div.appendChild(p);
            div.appendChild(a);
            //Appending card as child of the generic div
            document.querySelector('main#directory').appendChild(card);
        }
    });
}
