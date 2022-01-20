import { countries } from '../api/getData.js';
import { renderContent } from './render-content.js';

const toTitleCase = (phrase) => {
	return phrase
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

export const search = () => {
	const searchBar = document.querySelector('.search');

	searchBar.addEventListener('keydown', (e) => {
		if (e.key == 'Backspace' || e.key == 'Delete') {
			countryName = countryName.slice(0, -1);
			activeContent = countries.nameSearch(toTitleCase(countryName));
			renderContent();
		} else {
			countryName += e.key;
			activeContent = countries.nameSearch(toTitleCase(countryName));
			renderContent();
		}
	});
};
