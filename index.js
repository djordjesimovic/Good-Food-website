import {locations} from './data.js';
let voIlData = locations[0];

let locationContainer = document.querySelector('.location-container');



function populateLocation(data){
    locationContainer.innerHTML = `
     <div class="image-container">
        <img src="./img/${data.img}" alt="${data.name}">
    </div>
    <div class="text-container">
        <h2 class="location-hading"><a href="${data.addressLink}" target="_blank">${data.address}</a></h2>
        <span class="contact-label">Kontakt:</span>
        <span class="tel-1 tel">${data.phone1}</span>
        <span class="tel-2 tel">${data.phone2}</span>

        <span class="time-label">Otvoreno:</span>
        <span class="open-time">${data.workingStart}h - ${data.workingEnd}h</span>
        <button class='poruci'>Poruci</button>
    </div>`
}

populateLocation(voIlData);

let voIlBtn = document.querySelector('.vo-il-btn');
voIlBtn.addEventListener('click', () => {
    populateLocation(voIlData);
});
let bogoslovijaBtn = document.querySelector('.bogoslovija-btn');
bogoslovijaBtn.addEventListener('click', () => {
    let bogoslovijaData = locations[1];
    populateLocation(bogoslovijaData)
});
let zarkovoBtn = document.querySelector('.zarkovo-btn');
zarkovoBtn.addEventListener('click', () => {
    let zarkovoData = locations[2];
    populateLocation(zarkovoData)
});
let zeleniVenacBtn = document.querySelector('.zeleni-venac-btn');
zeleniVenacBtn.addEventListener('click', () => {
    let zeleniVenacData = locations[3];
    populateLocation(zeleniVenacData)
});

let btns = document.querySelectorAll('.location-btn')

for (let btn of btns) {
    btn.addEventListener("click", () => {
      let current = document.querySelector(".active");
      current.classList.remove('active');
      btn.classList.add('active');
    });
}

