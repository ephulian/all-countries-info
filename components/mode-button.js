let root = document.documentElement;
const modeButton = document.querySelector('.mode');

export const mode = () => {
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
};
