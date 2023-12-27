let orderservicebutton = document.querySelector('.order-service-button');
let modaltitleform = document.querySelector('.backdrop');
let modalclosebtn = document.querySelector('.modal-close-btn');

orderservicebutton.addEventListener('click', () => {
    modaltitleform.classList.add('is-open');
});

modalclosebtn.addEventListener('click', (e) => { 
    e.preventDefault();
    modaltitleform.classList.remove('is-open');
})

let mobilemenuopenbtn = document.querySelector('.header-mobile-menu-open-btn');
let mobailform = document.querySelector('.heder-mobile-menu-wrapper');
let mobileclosebtn = document.querySelector('.heder-modal-close-btn');


mobilemenuopenbtn.addEventListener('click', () => {
    mobailform.classList.add('is-open');
})

mobileclosebtn.addEventListener('click', (e) => {
    mobailform.classList.remove('is-open');
})