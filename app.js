import { countries } from './api/getData.js';
import { Country } from './class.js';

console.log(countries.byPopulation());
// Define active content
// let activeContent = countries.byPopulation().slice(0, 20);

let activeContent = '';
let currentFilter = '';
let countryName = '';

// Filter dropdown
(function () {
	const filterButton = document.querySelector('.filter-by');
	const filterOptions = document.querySelector('.filter-options');
	const populationHL = document.querySelector('.population-high-to-low');
	const populationLH = document.querySelector('.population-low-to-high');
	const nameAZ = document.querySelector('.name-low-to-high');
	const nameZA = document.querySelector('.name-high-to-low');
	const continent = document.querySelector('.continent');

	const options = document.querySelectorAll('.option');
	const continentOption = document.querySelectorAll('.continent-option');

	const continentOptions = document.querySelector('.continent-options');

	const closeFilter = () => {
		filterOptions.style.height = '0';
		filterOptions.style.padding = '0';

		continentOptions.style.width = '0';
		continentOptions.style.padding = '0';
		open = false;
	};

	let open = false;
	filterButton.addEventListener('click', () => {
		if (open === false) {
			filterOptions.style.height = '165px';
			filterOptions.style.padding = '0.875rem';

			options.forEach((button) => {
				let continentsOpen = false;
				button.addEventListener('click', (e) => {
					switch (e.target) {
						case populationHL:
							activeContent = countries.byPopulation().slice(0, 20);
							currentFilter = countries.byPopulation().slice(0, 20);
							closeFilter();
							break;
						case populationLH:
							activeContent = countries.byPopulation().reverse().slice(0, 20);
							currentFilter = countries.byPopulation().reverse().slice(0, 20);
							closeFilter();
							break;
						case nameAZ:
							activeContent = countries.byName().slice(0, 20);
							currentFilter = countries.byName().slice(0, 20);
							closeFilter();
							break;
						case nameZA:
							activeContent = countries.byName().reverse().slice(0, 20);
							currentFilter = countries.byName().reverse().slice(0, 20);
							closeFilter();
							break;
						case continent:
							continentOptions.style.width = '160px';
							continentOptions.style.padding = '0.875rem 0.875rem 0.875rem 0';
							filterOptions.style.height = '190px';

							continentOption.forEach((option) => {
								option.addEventListener('click', (e) => {
									activeContent = countries.byContinent(e.target.innerHTML).slice(0, 20);
									currentFilter = countries.byContinent(e.target.innerHTML).slice(0, 20);

									closeFilter();
									reGenerateContent();
								});
							});
							// continentsOpen = true;
							break;
					}
					reGenerateContent();
				});
			});

			open = true;
		} else if (open === true) {
			closeFilter();
		}
	});
})();

// Light/Dark Mode
(function () {
	const modeButton = document.querySelector('.mode');
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

// Search button
(function () {
	const searchBar = document.querySelector('.search');

	const toTitleCase = (phrase) => {
		return phrase
			.toLowerCase()
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	};

	searchBar.addEventListener('keydown', (e) => {
		if (e.key == 'Backspace' || e.key == 'Delete') {
			countryName = countryName.slice(0, -1);
			activeContent = countries.nameSearch(toTitleCase(countryName));
			reGenerateContent();
		} else {
			countryName += e.key;
			activeContent = countries.nameSearch(toTitleCase(countryName));
			reGenerateContent();
		}
		console.log(countryName);
	});
})();

function reGenerateContent() {
	const countriesContainer = document.querySelector('.countries');

	if (!countryName && !currentFilter) {
		activeContent = countries.byPopulation().slice(0, 20);
	} else if (currentFilter) {
		activeContent = currentFilter;
	}

	const list = activeContent.map((country) => {
		return new Country(country).innerHTML;
	});

	let outputHTML = ``;
	list.forEach((item) => {
		outputHTML += item;
	});
	countriesContainer.innerHTML = outputHTML;
}

reGenerateContent();
