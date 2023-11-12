<script>
	// import { createShelterSearch, handeler} from '$lib/shelters/shelterFinder';
	// import type { PageData } from '../$types';
	// import { onDestroy } from 'svelte';

	// export let data: PageData;

	// type Shelter = {
	// 	city: string,
	// 	state: string,
	// 	name: string,
	// 	searchTerms: string
	// }

	// const searchForShelter: Shelter = data.shelters.map((shelter: Shelter[]) => ({
	// 	...shelter,
	// 	searchTerms: `${shelter.city} ${shelter.state} ${shelter.name}`
	// 	}));

	// const searchShelter = createShelterSearch(searchForShelter);

	// const unsubscribe = searchShelter.subscribe((model) => handeler(model));

	// onDestroy(() => {
	// 	unsubscribe();
	// });
</script>

<div class="product-grid">
	<!-- {#each $searchShelter as shelter}
		<div class="shelter">
			<h2>{shelter.name}</h2>
			<p>{shelter.city}</p>
			<p class="badge">{shelter.state}</p>
		</div>
	{/each} -->
</div>

<section class="main">
	<section class="shelter-finder">
		<h1>Help us bridge the gap</h1>
		<div class="container">
			<h2>Your journey begins here</h2>
			<input type="search" placeholder="Search our partners..." />
		</div>
	</section>
</section>

<style>
	* {
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
	}

	/* .main {
		min-height: 100vh;
		width: 100%;
		background-position: center;
		background-size: cover;
		position: relative;
		background-image: linear-gradient(rgba(170, 108, 84, 0.795), rgba(86, 73, 49, 0.702)),
			url('/images/foodbridge.webp');
	} */
	.shelter-finder {
		padding-left: 0%;
		padding-right: 0%;
		color: white;
		text-align: center;
	}

	h1 {
		font-size: 42px;
		color: rgb(255, 177, 99);
		margin-bottom: 20px;
		margin-top: 20px;
	}
	/* .search {
	} */
</style>
