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
//Dark Mode

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});