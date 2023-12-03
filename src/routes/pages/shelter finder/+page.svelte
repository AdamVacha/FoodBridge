<script>
	import { operationStore, query, setClient } from '@urql/svelte';
	import { writable } from 'svelte/store';
	import client from 'C:/FoodBridge/FoodBridgeMain-main/src/client.js'
	setClient(client);

	const listShelters = operationStore(
		`
		query {
			listShelters {
				data {
					_id 
					name
                    city
					state
					email
				}
			}
		}
		`
	);

	query(listShelters);
	
	let name = "";

</script>

<section class="main">
	<section class="shelter-finder">
		<h1>Help us bridge the gap</h1>
		<div class="container">
			<h2>Your journey begins here</h2>
			<input class="text" bind:value={name} placeholder="Search our partners..." />
		</div>
		<h2>Results
		</h2>

		{#if $listShelters.fetching}
		<p>Loading...</p>
		{:else if $listShelters.error}
		<p>Oh no... {$listShelters.error.message}</p>
		{:else}
			<ul>
				
				{#each $listShelters.data.listShelters.data as shelter}
					{#if shelter.name.toUpperCase().includes(name.toUpperCase()) || name == "" 
						|| shelter.city.toUpperCase().includes(name.toUpperCase()) 
							|| shelter.state.toUpperCase().includes(name.toUpperCase())}
						<h3>
							{shelter.name} - {shelter.city}, {shelter.state}
							<h4>
								{shelter.email}
								<button>Donate here</button>
							</h4>
							
						</h3>
						
						
					{/if}
				{/each}
			</ul>
		{/if}
	</section>
</section>



<style>
	* {
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
	}

	.main {
		min-height: 100vh;
		width: 100%;
		background-position: center;
		background-size: cover;
		position: relative;
		background-image: linear-gradient(rgba(170, 108, 84, 0.795), rgba(86, 73, 49, 0.702)),
			url('/images/foodbridge.webp');
	}

	.shelter-finder {
		padding-left: 0%;
		padding-right: 0%;
		color: white;
		text-align: center;
	}

	h1 {
		font-size: 70px;
		color: rgb(255, 177, 99);
		margin-bottom: 20px;
		margin-top: 20px;
	}

	h2 {
		font-size: 42px;
		color: rgb(255, 177, 99);
		margin-bottom: 20px;
		margin-top: 20px;
		text-align: center;
	}

	h3 {
		font-size: 42px;
		color: rgb(255, 255, 254);
		text-align: center;
	}

	h4 {
		font-size: 35px;
		color: rgb(255, 255, 254);
		font-weight: normal;
		text-align: center;
	}

	input {
		width: 400px;
		height: 40px;
		text-align: center;
		font-size: 30px;
		box-shadow: 10px 10px 5px rgb(102, 73, 42);
		border: none;
		border-radius: 20px;
	}
</style>
