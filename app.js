import { countries } from './api/getData.js';
import { Country } from './class.js';

// console.log(countries.byPopulation());

const searchBar = document.querySelector('.search');
let first20 = countries.byPopulation().slice(0, 20);

// Filter dropdown
const filterButton = document.querySelector('.filter-by');
const filterOptions = document.querySelector('.filter-options');
const populationHL = document.querySelector('.population-high-to-low');
const populationLH = document.querySelector('.population-low-to-high');
const nameAZ = document.querySelector('.name-low-to-high');
const nameZA = document.querySelector('.name-high-to-low');
const continent = document.querySelector('.continent');

const options = document.querySelectorAll('.option');

const filterOptionButtons = [populationHL, populationLH, nameAZ, nameZA, continent];

let open = false;
filterButton.addEventListener('click', () => {
	if (open === false) {
		filterOptions.style.height = '165px';
		filterOptions.style.padding = '0.875rem';

		options.forEach((button) => {
			button.addEventListener('click', (e) => {
				switch (e.target) {
					case populationHL:
						console.log('population hl');
						first20 = countries.byPopulation();
						break;
					case populationLH:
						first20 = countries.byPopulation().reverse();
						// location.reload();
						generateContent();
						console.log('population lh');
						break;
					case nameAZ:
						first20 = countries.byName();
						generateContent(first20);
						console.log('name az');
						break;
					case nameZA:
						console.log('name za');
						break;
					case continent:
						console.log('continent');
						break;
				}
			});
		});

		open = true;
	} else if (open === true) {
		filterOptions.style.height = '0';
		filterOptions.style.padding = '0';
		open = false;
	}
});

// Light/Dark Mode
(function () {
	const modeButton = document.querySelector('.mode');
	const body = document.querySelector('body');
	const filter = document.querySelector('.filter-by');
	const filterOptions = document.querySelector('.filter-options');
	let root = document.documentElement;

	modeButton.addEventListener('click', () => {
		if (modeButton.innerHTML == 'Dark Mode') {
			// Change to Dark Mode
			root.style.setProperty('--clr-light-mode-background', 'hsl(207, 26%, 17%)');
			root.style.setProperty('--clr-light-mode-input', 'hsl(0, 0%, 100%)');
			root.style.setProperty('--clr-light-mode-element', 'hsl(209, 23%, 22%)');
			root.style.setProperty('--clr-light-mode-text', 'hsl(0, 0%, 100%)');
			root.style.setProperty('--box-shadow', '0px 2px 5px rgba(31, 31, 31, 0.83)');

			modeButton.innerHTML = 'Light Mode';
		} else if (modeButton.innerHTML == 'Light Mode') {
			// Change to Light Mode
			root.style.setProperty('--clr-light-mode-background', 'hsl(0, 0%, 98%)');
			root.style.setProperty('--clr-light-mode-input', 'hsl(0, 0%, 52%)');
			root.style.setProperty('--clr-light-mode-element', 'hsl(0, 0%, 100%)');
			root.style.setProperty('--clr-light-mode-text', 'hsl(200, 15%, 8%)');
			root.style.setProperty('--box-shadow', '0px 2px 5px rgba(152, 152, 152, 0.344)');
			modeButton.innerHTML = 'Dark Mode';
		}
	});
})();

async function generateContent(list) {
	const content = list.forEach((country) => {
		new Country(country);
	});

	return content;
}

console.log(first20);
await generateContent(first20);
