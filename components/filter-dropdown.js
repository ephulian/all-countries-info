import { countries } from '../api/getData.js';
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

	const closeFilter = () => {
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
						closeFilter();
						break;
					case populationLH:
						activeContent = slicer(countries.byPopulation().reverse(), currentCount);
						currentFilter = countries.byPopulation().reverse();
						closeFilter();
						break;
					case nameAZ:
						activeContent = slicer(countries.byName(), currentCount);
						currentFilter = countries.byName();
						closeFilter();
						break;
					case nameZA:
						activeContent = slicer(countries.byName().reverse(), currentCount);
						currentFilter = countries.byName().reverse();
						closeFilter();
						break;
					case continent:
						continentOptions.style.width = '160px';
						continentOptions.style.padding = '0.875rem 0.875rem 0.875rem 0';
						filterOptions.style.height = '190px';

						continentOption.forEach((option) => {
							option.addEventListener('click', (e) => {
								activeContent = slicer(countries.byContinent(e.target.innerHTML), currentCount);
								currentFilter = countries.byContinent(e.target.innerHTML);

								closeFilter();
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
		closeFilter();
	}
}

// export const dropDown = await filterDropDown();

// export function dropDown() {
// 	const filterButton = document.querySelector('.filter-by');
// 	const filterOptions = document.querySelector('.filter-options');
// 	const populationHL = document.querySelector('.population-high-to-low');
// 	const populationLH = document.querySelector('.population-low-to-high');
// 	const nameAZ = document.querySelector('.name-low-to-high');
// 	const nameZA = document.querySelector('.name-high-to-low');
// 	const continent = document.querySelector('.continent');
// 	const options = document.querySelectorAll('.option');
// 	const continentOption = document.querySelectorAll('.continent-option');
// 	const continentOptions = document.querySelector('.continent-options');

// 	const closeFilter = () => {
// 		currentCount = 20;
// 		filterOptions.style.height = '0';
// 		filterOptions.style.padding = '0';
// 		continentOptions.style.width = '0';
// 		continentOptions.style.padding = '0';
// 		open = false;
// 	};

// 	let open = false;
// 	filterButton.addEventListener('click', () => {
// 		if (open === false) {
// 			filterOptions.style.height = '165px';
// 			filterOptions.style.padding = '0.875rem';
// 			options.forEach((button) => {
// 				let continentsOpen = false;
// 				button.addEventListener('click', (e) => {
// 					switch (e.target) {
// 						case populationHL:
// 							activeContent = slicer(countries.byPopulation(), currentCount);
// 							currentFilter = countries.byPopulation();
// 							closeFilter();
// 							break;
// 						case populationLH:
// 							activeContent = slicer(countries.byPopulation().reverse(), currentCount);
// 							currentFilter = countries.byPopulation().reverse();
// 							closeFilter();
// 							break;
// 						case nameAZ:
// 							activeContent = slicer(countries.byName(), currentCount);
// 							currentFilter = countries.byName();
// 							closeFilter();
// 							break;
// 						case nameZA:
// 							activeContent = slicer(countries.byName().reverse(), currentCount);
// 							currentFilter = countries.byName().reverse();
// 							closeFilter();
// 							break;
// 						case continent:
// 							continentOptions.style.width = '160px';
// 							continentOptions.style.padding = '0.875rem 0.875rem 0.875rem 0';
// 							filterOptions.style.height = '190px';
// 							continentOption.forEach((option) => {
// 								option.addEventListener('click', (e) => {
// 									activeContent = slicer(countries.byContinent(e.target.innerHTML), currentCount);
// 									currentFilter = countries.byContinent(e.target.innerHTML);
// 									closeFilter();
// 									renderContent();
// 								});
// 							});
// 							// continentsOpen = true;
// 							break;
// 					}
// 					renderContent();
// 				});
// 			});
// 			open = true;
// 		} else if (open === true) {
// 			closeFilter();
// 		}
// 	});
// }
