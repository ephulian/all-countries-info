import { countries } from '../api/get-data.js';
import { renderContent } from './render-content.js';

const slicer = (content, count) => {
	return content.slice(0, count);
};

let open = false;
export function dropDown() {
	const filterOptions = document.querySelector('.filter-options');
	const populationHL = document.querySelector('.population-high-to-low');
	const populationLH = document.querySelector('.population-low-to-high');
	const nameAZ = document.querySelector('.name-low-to-high');
	const nameZA = document.querySelector('.name-high-to-low');
	const continent = document.querySelector('.continent');

	const options = document.querySelectorAll('.option');
	const continentOption = document.querySelectorAll('.continent-option');

	const continentOptions = document.querySelector('.continent-options');

	const closeDropdown = () => {
		currentCount = 20;
		filterOptions.style.height = '0';
		filterOptions.style.padding = '0';

		continentOptions.style.width = '0';
		continentOptions.style.padding = '0';
		open = false;
	};

	if (open === false) {
		filterOptions.style.height = '165px';
		filterOptions.style.padding = '0.875rem';

		options.forEach((button) => {
			button.addEventListener('click', (e) => {
				switch (e.target) {
					case populationHL:
						activeContent = slicer(countries.byPopulation(), currentCount);
						currentFilter = countries.byPopulation();
						closeDropdown();
						break;
					case populationLH:
						activeContent = slicer(countries.byPopulation().reverse(), currentCount);
						currentFilter = countries.byPopulation().reverse();
						closeDropdown();
						break;
					case nameAZ:
						activeContent = slicer(countries.byName(), currentCount);
						currentFilter = countries.byName();
						closeDropdown();
						break;
					case nameZA:
						activeContent = slicer(countries.byName().reverse(), currentCount);
						currentFilter = countries.byName().reverse();
						closeDropdown();
						break;
					case continent:
						continentOptions.style.width = '160px';
						continentOptions.style.padding = '0.875rem 0.875rem 0.875rem 0';
						filterOptions.style.height = '190px';

						continentOption.forEach((option) => {
							option.addEventListener('click', (e) => {
								activeContent = slicer(countries.byContinent(e.target.innerHTML), currentCount);
								currentFilter = countries.byContinent(e.target.innerHTML);

								closeDropdown();
								renderContent();
							});
						});
						// continentsOpen = true;
						break;
				}
				renderContent();
			});
		});

		open = true;
	} else if (open === true) {
		closeDropdown();
	}
}
