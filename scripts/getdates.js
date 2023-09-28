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