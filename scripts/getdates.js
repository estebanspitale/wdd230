const d = new Date();
document.getElementById("currentyear").innerHTML = d.getFullYear();

const a = new Date();
document.getElementById("lastmodified").innerHTML = a.toLocaleString();

/*Activity Lesson03 - Hamburger buttton*/

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
navigation.classList.toggle('open');
hamButton.classList.toggle('open');
});




/* --- Activity in group w03---
let hamburger = document.querySelector('#hamburger');
let navigation = document.querySelector('header');
 
hamburger.addEventListener('click', () => {
navigation.classList.toggle('responsive');
 
});

/*
<link rel="stylesheet" href="style/small.css" media="(max-width: 640px)">
<link rel="stylesheet" href="style/medium.css" media="(max-width: 950px)">

// Hamburger Menu
 
let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('header');
 
hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');
 
});

#hamburger {
        display: none;
    }
/* HEADER / NAV
header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

nav {
    margin:auto;
    grid-column: 2;
    grid-row: 1;
}

nav ul {
    display: flex;
    flex-direction: row;
    /* justify-content: space-evenly; 
}

#hamburger {
    display: none;
}

nav li {
    display: block;
    padding: 20px ;
}
*/