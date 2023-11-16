// Weather
const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weatherjs");
const captionDesc = document.querySelector("figcaption");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=-31.42&lon=-64.49&units=metric&appid=a764e02b1faffc440e57f1d7396de2ea`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function capitalizeString(string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
}

function displayResults(data) {
    let temp = data.main.temp;
    currentTemp.innerHTML = `${temp} &deg;C&nbsp;&nbsp;`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let descNotC = data.weather[0].description;
    let desc = capitalizeString(descNotC);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}