import {menu} from './data.js'
let container = document.querySelector('.container');


function ispisPica(){
    container.innerHTML = '';
    let pice = menu[0];
    for (const pom of pice) {
        let card = document.createElement('div');
        card.classList.add('pica-card');
        card.innerHTML +=  `
        <img src="/img/pice from figma/${pom.img}" alt="">

        <div class="card-text">
            <h3 class="name">${pom.ime}</h3>
            <p class="description">${pom.sastav}</p>
        </div>
        <span class="price">${pom.velicine[0].cena} RSD</span>

        <div class="size-choose">
            <div class="size-wrapper">
                <label for="m" class="label">${pom.velicine[0].size}(${pom.velicine[0].cm})</label>
                <input type="radio" value="M" name="${pom.ime}-size" id="m" checked>
            </div>
            <div class="size-wrapper">
                <label for="l" class="label">${pom.velicine[1].size}(${pom.velicine[1].cm})</label>
                <input type="radio" value="L" name="${pom.ime}-size" id="l">
            </div>           
            <div class="size-wrapper">
                <label for="xl" class="label">${pom.velicine[2].size}(${pom.velicine[2].cm})</label>
                <input type="radio" value="XL" name="${pom.ime}-size" id="xl">
            </div>              
            <div class="size-wrapper">
                <label for="xxl" class="label">${pom.velicine[3].size}(${pom.velicine[3].cm})</label>
                <input type="radio" value="XXL" name="${pom.ime}-size" id="xxl">
            </div>
        </div>
        <div class="bottom-card-sct">

            <a href='https://glovoapp.com/rs/sr/beograd/good-food-beg/' class="poruci">Poruči</a>
        </div> `
        
        let radioBtns = card.querySelectorAll('input');
        let price = card.querySelector('.price');
        let extraCheckbox = card.querySelector('#extra');
        
        for (const btn of radioBtns) {
            btn.addEventListener('click', () => {
                for (const velicina of pom.velicine) {
                    if(velicina.size === btn.value){
                        price.textContent = `${velicina.cena} RSD`
                        extraCheckbox.addEventListener('click', () => {
                            if(extraCheckbox.checked){
                                let finalValue = velicina.cena + velicina.extra;
                                price.textContent = `${finalValue} RSD`
                            }
                            else{
                                price.textContent = `${velicina.cena} RSD`
                            }
                        })
                        
                    }
                    
                }
            })
        }
        container.appendChild(card)
    }
}

function ispis(products){
    container.innerHTML = '';

    for (const pom of products) {
        let card = document.createElement('div');
        card.classList.add('rostilj-card');
        card.innerHTML += `
  
        <img src="/img/rostilj from figma/${pom.img}" alt="">

        <div class="card-text">
            <h3 class="name">${pom.name}</h3>
            <p class="description">${pom.description}</p>
        </div>
        <span class="price">${pom.price} RSD</span>

        
        <div class="rostij-bottom">
            <a href="https://glovoapp.com/rs/sr/beograd/good-food-beg/" class="poruci">Poruči</a>
        </div> `
        container.appendChild(card);
    }

}

function customSndwich(glavno, namazi, salata){
    let card = document.createElement('div');
    card.classList.add('rostilj-card');
    let makeYourHeading = document.createElement('h2');
    makeYourHeading.classList.add("make-your-heading");
    makeYourHeading.textContent = 'Napravi svoj sendvič';
    card.appendChild(makeYourHeading);

    let lepinja = document.createElement('span');
    lepinja.classList.add('lepinja');
    lepinja.value = 50;
    lepinja.textContent = 'Lepinja(50 rsd)';
    card.appendChild(lepinja)

    let glavnoSelect = document.createElement('select');
    glavnoSelect.setAttribute('name', 'glavno');
    glavnoSelect.setAttribute('id', 'glavno');
    let defaultOption = document.createElement('option')
    defaultOption.setAttribute('value', 'default');
    defaultOption.textContent = 'Odaberi nadev za svoj sendvič';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.hidden = true;
    glavnoSelect.appendChild(defaultOption);

    for (const pom of glavno) {
        let option = document.createElement('option');
        option.setAttribute('value', pom.price);
        option.textContent = `${pom.name}, ${pom.price} rsd`;
        glavnoSelect.appendChild(option)
    }
    card.appendChild(glavnoSelect);

    let glavnoFirst = document.createElement('option');
    glavnoFirst.value = 0;
    glavnoFirst.textContent = '/'
    glavnoSelect.appendChild(glavnoFirst)


    let namazSelect = document.createElement('select');
    namazSelect.setAttribute('name', 'namaz');
    namazSelect.setAttribute('id', 'namaz');
    let defaultNamaz = document.createElement('option')
    defaultNamaz.setAttribute('value', 'default');
    defaultNamaz.textContent = 'Odaberi namaz za svoj sendvič';
    defaultNamaz.selected = true;
    defaultNamaz.disabled = true;
    defaultNamaz.hidden = true;
    namazSelect.appendChild(defaultNamaz);

    for (const pom of namazi) {
        let option = document.createElement('option');
        option.setAttribute('value', pom.price);
        option.textContent = `${pom.name}, ${pom.price} rsd`;
        namazSelect.appendChild(option)
    }
    card.appendChild(namazSelect);

    let namazFirst = document.createElement('option');
    namazFirst.value = 0;
    namazFirst.textContent = '/'
    namazSelect.appendChild(namazFirst)


    let salataSelect = document.createElement('select');
    salataSelect.setAttribute('name', 'salata');
    salataSelect.setAttribute('id', 'salata');
    let defaultSalata = document.createElement('option')
    defaultSalata.setAttribute('value', 'default');
    defaultSalata.textContent = 'Odaberi salatu za svoj sendvič';
    defaultSalata.selected = true;
    defaultSalata.disabled = true;
    defaultSalata.hidden = true;
    salataSelect.appendChild(defaultSalata);

    for (const pom of salata) {
        let option = document.createElement('option');
        option.setAttribute('value', pom.price);
        option.textContent = `${pom.name}, ${pom.price} rsd`;
        salataSelect.appendChild(option)
    }
    card.appendChild(salataSelect);

    let salataFirst = document.createElement('option');
    salataFirst.value = 0;
    salataFirst.textContent = '/'
    salataSelect.appendChild(salataFirst)

    let priceSpan = document.createElement('span');
    priceSpan.classList.add('price');
    priceSpan.setAttribute('id', 'sandwich-price')
    card.appendChild(priceSpan);

    let poruciBtn = document.createElement('a');
    poruciBtn.classList.add('poruci');
    poruciBtn.setAttribute('id', 'poruci-sendvic');
    poruciBtn.textContent = 'Poruči';
    card.appendChild(poruciBtn)

    container.appendChild(card);

    let poruciSendvicBtn = document.querySelector('#poruci-sendvic');
    let glavnoSelectOption = document.querySelector('#glavno');
    let namazSelectOption = document.querySelector('#namaz');
    let salataSelectOption = document.querySelector('#salata');
    let priceSandwich = document.querySelector('#sandwich-price');
    let lepinjaPrice = document.querySelector('.lepinja')
    poruciSendvicBtn.addEventListener('click', () => {
        if(glavnoSelectOption.value !== 'default' && namazSelectOption.value !== 'default' && salataSelectOption.value !== 'default'){
            priceSandwich.textContent = `${Number(lepinjaPrice.value) + Number(glavnoSelectOption.value) + Number(namazSelectOption.value) + Number(salataSelectOption.value)} rsd`;
        }
    })
}

let rostilj = menu[1];
let sendvici = menu[2];
let glavno = menu[3];
let namazi = menu[4];
let salate = menu[5];

ispis(rostilj)

let piceBtn = document.querySelector('.pice');
piceBtn.addEventListener('click', () => {
    ispisPica()
})

let rostiljBtn = document.querySelector('.rostilj')
rostiljBtn.addEventListener('click', () => {
    ispis(rostilj);
})

let sendviciBtn = document.querySelector('.sendvic');
sendviciBtn.addEventListener('click', () => {
    ispis(sendvici)
    customSndwich(glavno, namazi, salate)
})