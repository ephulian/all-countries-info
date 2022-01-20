export class Country {
	constructor(country) {
		this.country = country;
		const countriesContainer = document.querySelector('.countries');

		this.population = this.commafy(this.country.population);

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
                        <h3 id="population" class="info-value">${this.population}</h3>
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

		this.commafy = this.commafy.bind(this);

		return this.countryCard;
		// countriesContainer.appendChild(this.countryCard);
	}

	commafy(num) {
		var str = num.toString().split('.');
		if (str[0].length >= 5) {
			str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
		}
		if (str[1] && str[1].length >= 5) {
			str[1] = str[1].replace(/(\d{3})/g, '$1 ');
		}
		return str.join('.');
	}
}
