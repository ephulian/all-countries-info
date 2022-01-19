import { countries } from './api/getData.js';

// console.log(countries.byPopulation());

const searchBar = document.querySelector('.search');
const countriesContainer = document.querySelector('.countries');
const filterButton = document.querySelector('.filter-by');
const filterOptions = document.querySelector('.filter-options');

(function () {
	let open = false;
	filterButton.addEventListener('click', () => {
		if (open === false) {
			filterOptions.style.height = '165px';
			filterOptions.style.padding = '0.875rem';
			open = true;
		} else if (open === true) {
			filterOptions.style.height = '0';
			filterOptions.style.padding = '0';
			open = false;
		}
	});
})();

class Country {
	constructor(country) {
		this.country = country;

		this.countryCard = document.createElement('div');
		this.countryCard.classList.add('country-card');
		this.countryCard.innerHTML = `
        <div class="country-card">
                <div class="flag-container">
                    <img src="${this.country.flags.svg}" alt="" class="flag">
                </div>
                <div class="country-info">
                    <h1 class="country-title">${this.country.name.common}</h1>
                    <div class="country-metric">
                        <h2 class="info-type">Population: </h2>
                        <h3 id="population" class="info-value">${this.country.population}</h3>
                    </div>
                    <div class="country-metric">
                        <h2 class="info-type">Region: </h2>
                        <h3 id="region" class="info-value">${this.country.region}</h3>
                    </div>
                    <div class="country-metric">
                        <h2 class="info-type">Capital: </h2>
                        <h3 id="capital" class="info-value">${this.country.capital}</h3>
                    </div>
                </div>
            </div>
        `;

		countriesContainer.appendChild(this.countryCard);
	}
}

const first20 = countries.byPopulation().slice(0, 20);

first20.forEach((country) => {
	new Country(country);
});

console.log(first15);
