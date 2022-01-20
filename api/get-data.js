export const getData = async () => {
	const countriesAPI = 'https://restcountries.com/v3.1/all';
	async function allCountriesAPI(url) {
		try {
			const countries = await fetch(url);
			const response = await countries.json();

			return response;
		} catch (e) {
			console.log(e);
		}
	}

	const data = await allCountriesAPI(countriesAPI);

	function byPopulation() {
		const sorter = (a, b) => parseInt(a.population) - parseInt(b.population);
		return data.sort(sorter).reverse();
	}

	function byName() {
		const sorter = (a, b) => {
			if (a.name.common > b.name.common) {
				return 1;
			} else if (a.name.common < b.name.common) {
				return -1;
			} else {
				return 0;
			}
		};
		return data.sort(sorter);
	}

	function byContinent(continent) {
		const sorter = (a, b) => {
			if (a.name.common > b.name.common) {
				return 1;
			} else if (a.name.common < b.name.common) {
				return -1;
			} else {
				return 0;
			}
		};
		return data.filter((country) => country.region === continent).sort(sorter);
	}

	function nameSearch(name) {
		return data.filter((country) => country.name.common.includes(name));
	}

	return {
		byPopulation: byPopulation,
		byName: byName,
		byContinent: byContinent,
		nameSearch: nameSearch,
	};
};

export const countries = await getData();
