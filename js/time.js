function getLastModified() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
    document.getElementById("lastModifiedDate").innerText = "Last time modified: " + document.lastModified;
}