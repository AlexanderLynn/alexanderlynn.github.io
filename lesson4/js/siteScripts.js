function getTime() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("time").innerHTML = days[new Date().getDay()] + ",";
    document.getElementById("time").innerHTML += " " + new Date().getDate();
    document.getElementById("time").innerHTML += " " + months[new Date().getMonth()];
    document.getElementById("time").innerHTML += " " + new Date().getFullYear();
}
function toggleMenu() {
    document.getElementById("menu").classList.toggle("hide");
}