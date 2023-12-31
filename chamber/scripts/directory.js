// Grid and List

const listbutton = document.querySelector("#list");
const gridbutton = document.querySelector("#grid");
const display = document.querySelector("article");


listbutton.addEventListener("click", () => {
	display.classList.add("directory-list");
	display.classList.remove("directory-grid");
});

gridbutton.addEventListener("click", () => {
	display.classList.add("directory-grid");
	display.classList.remove("directory-list");
});

// Chamber Directory

const getMembersURL = "https://estebanspitale.github.io/wdd230/chamber/data/members.json";
const directoryContainer = document.querySelector('.directory-grid');

async function getMembers() {
    const response = await fetch(getMembersURL);
    const data = await response.json();
    console.log(data.companies);
    displayMembers(data.companies);
}

const displayMembers = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('a');
        let webURL = document.createElement('a');
        let image = document.createElement('img');
        let membershipL = document.createElement('p');
        
        card.setAttribute('class', 'member-card');

        name.setAttribute('class', 'd-name');
        name.textContent = company.name;
        
        address.setAttribute('class', 'd-address');
        address.textContent = company.address;

        phone.setAttribute('class', 'd-phone');
        phone.textContent = company.phone;
        phone.setAttribute('href', `tel:${company.phone}`);

        webURL.setAttribute('class', 'd-url');
        webURL.textContent = company.websiteURL;
        webURL.setAttribute('href', `https://${company.websiteURL}/`);
        webURL.setAttribute('target', '_blank');

        image.setAttribute('class', 'd-image');
        image.setAttribute('src', company.image);
        image.setAttribute('alt', `Logo of ${company.name}`);
        image.setAttribute('loading', 'lazy');

        membershipL.setAttribute('class', 'd-lvl');
        membershipL.textContent = company.membershiplevel;


        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(webURL);
        card.appendChild(membershipL);


        
        directoryContainer.appendChild(card);
    });
}

getMembers();