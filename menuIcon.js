const icon = document.querySelector('.menu-icon');
const responsiveMenu = document.querySelector('.responsive-menu');

icon.addEventListener('click', () =>{
    icon.classList.toggle('active');

    if(icon.classList.contains('active')){
        responsiveMenu.classList.remove('animation-remove');
        responsiveMenu.classList.add('animation-add');
    }
    else{
        responsiveMenu.classList.remove('animation-add');
        responsiveMenu.classList.add('animation-remove');
    }
});

//Sticky navbar

const navbar = document.querySelector('header');
const sticky = navbar.offsetTop;

const hero = document.querySelector('[sct="main-sct"');

window.onscroll = function(){

    if(window.pageYOffset > hero.scrollHeight - hero.scrollHeight){
        navbar.classList.remove('sticky-remove')
        navbar.classList.add('sticky');
        navbar.style.backgroundColor = '#fff'
    }
    else{
        navbar.classList.remove('sticky');
        navbar.classList.add('sticky-remove')
    }
}