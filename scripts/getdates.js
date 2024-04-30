
const date = new Date();
let year = date.getFullYear();
document.getElementById("currentyear").innerHTML = year;

let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;