import { dropDown } from './components/filter-dropdown.js';
import { renderContent } from './components/render-content.js';
import { mode } from './components/mode-button.js';
import { search } from './components/search-bar.js';

window.activeContent = '';
window.currentFilter = '';
window.countryName = '';
window.currentCount = 20;

const filterButton = document.querySelector('.filter-by');
filterButton.addEventListener('click', dropDown);

const modeButton = document.querySelector('.mode');
modeButton.addEventListener('click', mode);

const searchBar = document.querySelector('.search');
searchBar.addEventListener('keydown', (e) => {
	search(e.key);
});

window.onscroll = function () {
	if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
		currentCount += 20;
		renderContent();
	}
};

renderContent();
