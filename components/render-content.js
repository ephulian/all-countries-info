import { countries } from '../api/getData.js';
import { Country } from '../class.js';

const slicer = (content, count) => {
	return content.slice(0, count);
};

export const renderContent = () => {
	const countriesContainer = document.querySelector('.countries');

	if (!countryName && !currentFilter) {
		// activeContent = countries.byPopulation().slice(0, 20);
		activeContent = slicer(countries.byPopulation(), currentCount);
	} else if (currentFilter) {
		activeContent = slicer(currentFilter, currentCount);
	}

	const list = activeContent.map((country) => {
		return new Country(country).innerHTML;
	});

	let outputHTML = ``;
	list.forEach((item) => {
		outputHTML += item;
	});
	countriesContainer.innerHTML = outputHTML;
};
