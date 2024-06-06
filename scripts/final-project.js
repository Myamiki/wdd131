const a = document.querySelector ('a');
const hambutton = document.querySelector ('.navbar');

hambutton.addEventListener('click',() => {
    a.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const date = new Date();
let currentyear = date.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;