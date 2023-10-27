import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const getShelterData = async () => {
		const res = await fetch('https://dummyjson.com/products');
		const data = await res.json();
		return data.shelters;
	};

	return {
		shelters: getShelterData()
	};
};
