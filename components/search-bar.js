import { countries } from '../api/get-data.js';
import { renderContent } from './render-content.js';

const toTitleCase = (phrase) => {
	return phrase
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

export const search = (key) => {
	if (key == 'Backspace' || key == 'Delete') {
		countryName = countryName.slice(0, -1);
		activeContent = countries.nameSearch(toTitleCase(countryName));
		renderContent();
	} else {
		countryName += key;
		activeContent = countries.nameSearch(toTitleCase(countryName));
		renderContent();
	}
};
