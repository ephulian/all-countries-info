import { dropDown } from './components/filter-dropdown.js';
import { renderContent } from './components/render-content.js';
import { changeMode } from './components/mode-button.js';
import { search } from './components/search-bar.js';

window.activeContent = '';
window.currentFilter = '';
window.countryName = '';
window.currentCount = 20;

// Filter
const filterButton = document.querySelector('.filter-by');
filterButton.addEventListener('click', dropDown);

// Dark/Light Mode
const modeButton = document.querySelector('.mode');
modeButton.addEventListener('click', changeMode);

// Search
const searchBar = document.querySelector('.search');
searchBar.addEventListener('keydown', (pressed) => {
	search(pressed.key);
});

renderContent();

// Add 20 more countries when scrolled all the way down
window.onscroll = function () {
	if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
		currentCount += 20;
		renderContent();
	}
};
