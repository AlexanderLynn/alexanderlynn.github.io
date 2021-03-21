function getTime() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("time").innerHTML = days[new Date().getDay()] + ",";
    document.getElementById("time").innerHTML += " " + new Date().getDate();
    document.getElementById("time").innerHTML += " " + months[new Date().getMonth()];
    document.getElementById("time").innerHTML += " " + new Date().getFullYear();
}
window.addEventListener('load', (event) => {
    WebFont.load({ google: {families: ['Architects Daughter', 'Raleway']}});
});

function toggleMenu() {
    document.getElementById("menu").classList.toggle("hide");
}

//JSON Import
fetch("lesson11/home/town.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //Temporary checking for valid response and data parsing
    console.table(jsonObject);
    //Creating div for content
    let div = document.createElement('div');
    div.setAttribute("id", "content");
    document.querySelector('main').appendChild(div);
    document.querySelector('main').insertBefore(div, document.getElementById("article"));
    //Content Population loop from JSON
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        //Important selected data only
        if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
            //Creating html elements
            let section = document.createElement("section");
            let div = document.createElement("div");
            let name = document.createElement("h3");
            let motto = document.createElement("span");
            let year = document.createElement("p");
            let pop = document.createElement("p");
            let rain = document.createElement("p");
            let photo = document.createElement("img");
            //Fill elements
            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            year.textContent = "Year Founded: " + towns[i].yearFounded;
            pop.textContent = "Population: " + towns[i].currentPopulation;
            rain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            photo.setAttribute('src', "images/main_photos/" + towns[i].photo);
            //Create section in DOM
            section.appendChild(div);
            div.appendChild(name);
            div.appendChild(motto);
            div.appendChild(year);
            div.appendChild(pop);
            div.appendChild(rain);
            section.appendChild(photo);
            //Append section to page
            document.getElementById("content").appendChild(section);
        }
    }
  });