import {links, checks } from './info.js';


function mostrarLinks(){
    const navList = document.getElementById('nav-list');

    
    const listHTML = links.map((link, i) => { 

    let linkActive = i === 0 ? 'text-veryDark dark:text-veryWhite' : 'text-veryDesaturedGray'
        
    return `
    <li class="${linkActive} font-semibold xl:font-medium cursor-pointer hover:text-veryDark
    duration-500 ease-in-out dark:hover:text-veryWhite">
        ${link.label}
    </li>`}).join("");

    navList.innerHTML = listHTML
}



function mostrarChecks () {
    const checksList = document.getElementById('check-container');

    const checkHTML = checks.map((check, i) => 
    `<div class="flex items-center gap-1">
        <img src="${check.image}"/>
        <p class="text-veryDesaturedGray text-sm">${check.text}</p>
    </div>`
    ).join('');

    checksList.innerHTML = checkHTML
}

mostrarLinks()
mostrarChecks()


const linkHamburger = document.getElementById('box-model');
const navContainer = document.getElementById('nav-container');
const navContent = document.getElementById('nav-content');
const main = document.getElementById('main');
const iconHamburger = document.querySelector('.fa-bars');

console.log(iconHamburger)


linkHamburger.addEventListener('click', (e) => {
    e.preventDefault();
    navContainer.classList.toggle('clip-inset-100');
    navContent.classList.toggle('inset-content-100');
    
    if(navContainer.classList.contains('clip-inset-0')){
        iconHamburger.classList.toggle('fa-xmark');
        main.classList.toggle('filters');
        document.body.classList.toggle('modal-open');
    }

});




const toggleDark = document.getElementById('toggleDark');
const logoAlarado = document.getElementById('logo-alarado');

console.log(logoAlarado)


toggleDark.addEventListener('click', (e) => {

    const icon1 = toggleDark.querySelector('i:nth-child(1)');
    const icon2 = toggleDark.querySelector('i:nth-child(2)');

    if(!document.documentElement.classList.contains('dark')){
        document.documentElement.classList.add('dark');
        icon1.classList.add('bg-veryDark', 'text-veryWhite');
        icon2.classList.add('text-veryDark');
        iconHamburger.classList.add('text-veryWhite');
        logoAlarado.setAttribute('src', './images/alarado-icon-white.svg');
    }else{
        document.documentElement.classList.remove('dark');
        icon1.classList.remove('bg-veryWhite', 'text-veryWhite');
        icon1.classList.add('text-veryWhite');
        icon2.classList.remove('bg-veryDark', 'text-veryWhite');
        iconHamburger.classList.remove('text-veryWhite')
        logoAlarado.setAttribute('src', './images/alarado-icon-homepage.svg');
    }

})



console.log(toggleDark)