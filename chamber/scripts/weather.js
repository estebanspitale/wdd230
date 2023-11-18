//Weather data
//Villa Carlos Paz, Cordoba, Argentina

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
    let descNot = data.weather[0].description;
    let desc = capitalizeString(descNot);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

// -------------------- Next 3 Days --------------------

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Cordoba&appid=a764e02b1faffc440e57f1d7396de2ea&units=metric`)
    .then(response => response.json())
    .then(data => {
        const forecast = document.querySelector(".forecast");
        const nextThreeDays = data.list.filter(entry => {
            const currentDate = new Date();
            const entryDate = new Date(entry.dt * 1000);
            return entryDate.getDate() > currentDate.getDate();
        });

        for (let i = 0; i < 3; i++) {
            const day = nextThreeDays[i];

            let date = new Date(day.dt * 1000).toLocaleDateString();
            let temperature = day.main.temp.toFixed(0);
            let description = day.weather[0].description.toUpperCase();
            let forecastIcon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`;

            let fores = document.createElement("div");
            let icons = document.createElement("img");
            let temp = document.createElement("p");
            let descr = document.createElement("p");

            icons.setAttribute('src', forecastIcon);
            icons.setAttribute('alt', description);
            icons.setAttribute('loading', 'lazy');
            temp.textContent = temperature + "°C";
            descr.textContent = description;

            fores.appendChild(icons);
            fores.appendChild(temp);
            fores.appendChild(descr);

            forecast.appendChild(fores);
        }
    });


    // -------------- BANNER --------------

    function bannerDay() {
      const today = new Date();
      const weekDay = today.getDay();
      // Monday-Wednesday (1-3)
      return weekDay >= 1 && weekDay <= 3;
  }
  
  function visibBanner() {
      const banner = document.getElementById('banner');
      if (bannerDay()) {
          banner.style.display = 'block';
      } else {
          banner.style.display = 'none';
      }
  }
  
  function closeBanner() {
      const banner = document.getElementById('banner');
      banner.style.display = 'none';
  }
  window.onload = visibBanner;
