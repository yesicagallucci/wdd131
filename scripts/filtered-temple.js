// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


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
  // Add more temple objects here...
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17-19",
    area: 159865,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
  },
  {
    templeName: "Asuncion Paraguay",
    location: "Asuncion, Paraguay",
    dedicated: "2002, May, 19",
    area: 49223,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/2-5b20486ae3876279c35be147ef9e63aec256a459.jpeg"
  },
  {
    templeName: "Sao Paulo Brazil",
    location: "Sao Pablo, Brazil",
    dedicated: "1978, October, 30",
    area: 80586,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },

];



function renderTemples(filteredTemples) {

    const container = document.getElementById("temple-cards");
    container.innerHTML = "";
    //console.log(container);


    filteredTemples.forEach((temple) => {
        
    //card wrapper/container
    const card = document.createElement("div");
    card.classList.add("temple-card"); 

    //Add child element H3 of the card
    const nameElement = document.createElement("h3");
    nameElement.textContent = temple.templeName;
    card.appendChild(nameElement);

    //Add child element p to the card for each descriptive lement of the object (location, dedicated, and area)
    const locationElement = document.createElement("p");
    locationElement.textContent = `location: ${temple.location}` //template literal or template string instead of concatenation
    card.appendChild(locationElement);

    const dedicatedElement = document.createElement("p");
    dedicatedElement.textContent = `Dedicated: ${temple.dedicated}`;
    card.appendChild(dedicatedElement);

    const areaElement = document.createElement("p");
    areaElement.textContent = `Area: ${temple.area} sq ft`;
    card.appendChild(areaElement);

    //Add image to the card:
    const imageElement = document.createElement("img");
    imageElement.src = temple.imageUrl; 
    imageElement.alt = temple.templeName;
    imageElement.loading = "lazy";
    card.appendChild(imageElement);

    //Appened the finished card to the poarent element
    document.querySelector("#temple-cards").appendChild(card);

    })

}
//Old
//stop the links from reloading the page
document.getElementById("old").addEventListener("click", (e) => {
  e.preventDefault();

   console.log("Old clicked!"); // test

  //add .filter() to set the behavior when clicking
  const oldTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1990 

  });

  renderTemples(oldTemples);

})

//new
document.getElementById("new").addEventListener("click", (e) => {
  e.preventDefault();

  const newTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year >= 1990
  });

  renderTemples(newTemples);

});

//area-large
document.getElementById("large").addEventListener("click", (e) => {
  e.preventDefault();

  const largeTemples = temples.filter((temple) => temple.area > 90000);

  renderTemples(largeTemples);
});

//area - small
document.getElementById("small").addEventListener("click", (e) => {
  e.preventDefault();

  const smallTemples = temples.filter((temple) => temple.area < 90000);

  renderTemples(smallTemples);
});


//home is filtered all instead of reloadingthe page
document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault(); // optional, if you don’t want it to reload

  renderTemples(temples);
});




renderTemples(temples);

