function getTime() {
    document.getElementById("time").innerHTML = new Date().getDay();
    document.getElementById("time").innerHTML += " " + new Date().getMonth();
    document.getElementById("time").innerHTML += " " + new Date().getFullYear();
}
function toggleMenu() {
    document.getElementById("menu").classList.toggle("hide");
}