
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const date = new Date();
let currentyear = date.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;


//copy the following arrays and add 3 of uour own//
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Boise Idaho Temple",
        location: "Boise City, Boise",
        dedicated: "1983, September, 12",
        area: 980075,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Asunción Paraguay Temple",
        location:  "Asunción City, Asunción",
        dedicated: "2000, July, 10",
        area: 155680,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      
      {
        
        templeName: "San Juan Puerto Rico",
        location: "San Juan, PR  00926",
        dedicated: "2023, January, 15",
        area: 6988,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
    
    ]
// 
    function createTempleCard(filteredTemples){
      document.querySelector(".container").innerHTML = "";
      filteredTemples.forEach(temple =>{
          let card = document.createElement("section");
          let name = document.createElement("h3");
          let location = document.createElement("p");
          let dedication = document.createElement("p");
          let area = document.createElement("p");
          let img = document.createElement("img");
  
          
          name.textContent = temple.templeName;
          location.innerHTML = `<p><span class="label">Location:</span> ${temple.location}</p>`;
          dedication.innerHTML = `<p><span class="label">Dedicated:</span> ${temple.dedicated}</p>`;
          area.innerHTML = `<p><span class="label">Size:</span> ${temple.area} sq ft</p>`;
          img.setAttribute("src", temple.imageUrl);
          img.setAttribute("alt", `${temple.templeName} Temple`);
          img.setAttribute("loading", "lazy");
  
          card.appendChild(name);
          card.appendChild(location);
          card.appendChild(dedication);
          card.appendChild(area);
          card.appendChild(img);
          
          document.querySelector(".container").appendChild(card);
      });
  }
  
  createTempleCard(temples);
  
  const homeFilterLink = document.querySelector("#homeFilter");
  const oldFilterLink = document.querySelector("#oldFilter");
  const newFilterLink = document.querySelector("#newFilter");
  const largeFilterLink = document.querySelector("#largeFilter");
  const smallFilterLink = document.querySelector("#smallFilter");
  
  homeFilterLink.addEventListener("click", () => {
      createTempleCard(temples);
  })
  
  oldFilterLink.addEventListener("click", () => {
      createTempleCard(temples.filter(temple => {
          let year = parseInt(temple.dedicated.split(", ")[0]); 
          return year < 1900; // 
      }));
  })
  
  newFilterLink.addEventListener("click", () => {
      createTempleCard(temples.filter(temple => {
          let year = parseInt(temple.dedicated.split(", ")[0]);
          return year > 2000; 
      }));
  })
  
  largeFilterLink.addEventListener("click", () => {
      createTempleCard(temples.filter(temple => temple.area.valueOf() > 90000));
  })
  
  smallFilterLink.addEventListener("click", () => {
      createTempleCard(temples.filter(temple => temple.area.valueOf() < 10000));
  })
