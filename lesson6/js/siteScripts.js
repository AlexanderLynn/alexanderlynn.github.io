function getTime() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("time").innerHTML = days[new Date().getDay()] + ",";
    document.getElementById("time").innerHTML += " " + new Date().getDay();
    document.getElementById("time").innerHTML += " " + months[new Date().getMonth()];
    document.getElementById("time").innerHTML += " " + new Date().getFullYear();
}
//Wind Chill Code
window.addEventListener('load', (event) => {
    let temp = parseInt(document.getElementById("temp").innerHTML);
    let speed = parseInt(document.getElementById("windSpeed").innerHTML);
    let windChill = 35.74 + 0.6215 * temp - 35.75 * (Math.pow(speed, 0.16)) + 0.4275 * temp * (Math.pow(speed, 0.16));
    document.getElementById("windChill").innerHTML = windChill.toFixed(1);
});
//Banner Code. This way you can set whatever value you want in the JS.
window.addEventListener('load', (event) => {
    if (new Date().getDay() == 5)
    {
        document.getElementById("banner").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    }
    else
        document.getElementById("banner").style.display = "none";
});

window.addEventListener('load', (event) => {
    WebFont.load({ google: {families: ['Architects Daughter', 'Raleway']}});
});

function toggleMenu() {
    document.getElementById("menu").classList.toggle("hide");
}

