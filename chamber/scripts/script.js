const d = new Date();
document.getElementById("currentyear").innerHTML = d.getFullYear();

const a = new Date();
document.getElementById("lastmodified").innerHTML = a.toLocaleString();

//small drop-down icon
const hamButton = document.querySelector('.ham');
const mainMenu = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{
    mainMenu.classList.toggle('responsive')
}, false);

window.onresize = () => {
    if(window.innerWidth > 760){
        
        mainMenu.classList.remove('responsive');
        
    }
};