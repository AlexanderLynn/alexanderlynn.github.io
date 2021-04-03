//Last Modified Function
window.addEventListener('load', (event) => {
        document.getElementById("lastModifiedDate").innerText = "Last time modified: " + document.lastModified;
});

//Callable Functions
function toggleMenu() {
    document.getElementById("menu").classList.toggle("hide");
}

