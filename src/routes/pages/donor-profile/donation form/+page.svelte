<script>
	let shelterSearch = '';
	let donationTypes = []; //array to store multiple donation types
	let donationPhoto = null;
	let pickupDate = '';
	let pickupTime = 'Morning (9 AM - 12 PM)';
	let otherDonation = '';

	function handleOtherDonationChange(event) {
		const isChecked = event.target.value.trim() !== ''; //checks if the "Other" input is not empty
		donationTypes[17] = isChecked ? 'Other' : ''; // updates the "Other" checkbox value
		otherDonation = event.target.value; //updates the "otherDonation" variable
	}

	function searchShelter() {
		//implement shelter search logic here
	}

	function submitDonation() {
		//implement form submission logic here
		console.log({
			shelterSearch,
			donationTypes,
			donationPhoto,
			pickupDate,
			pickupTime
		});
	}
</script>

<main class="main-content">
	<h1>Donation Form</h1>
	<form on:submit|preventDefault={submitDonation}>
		<div class="form-section">
			<label for="shelterSearch">Search Shelters:</label>
			<input
				type="text"
				id="shelterSearch"
				bind:value={shelterSearch}
				required
				placeholder="Enter City, State, or Shelter Name"
			/>
			<button type="button" on:click={searchShelter}>Search</button>

			<div id="shelterResults">
				<!-- Shelter search results will be displayed here -->
			</div>
		</div>

		<div class="form-section">
			<label>Select Donation Type(s):</label>
			<div class="checkbox-columns">
				<div class="checkbox-column">
					<label for="freshProduce">
						<input
							type="checkbox"
							id="freshProduce"
							bind:checked={donationTypes[0]}
							value="Fresh Produce"
						/> Fresh Produce
					</label>
					<label for="cannedGoods">
						<input
							type="checkbox"
							id="cannedGoods"
							bind:checked={donationTypes[1]}
							value="Canned Goods"
						/> Canned Goods
					</label>
					<label for="riceAndGrains">
						<input
							type="checkbox"
							id="riceAndGrains"
							bind:checked={donationTypes[2]}
							value="Rice and Grains"
						/> Rice and Grains
					</label>
					<label for="pastaAndNoodles">
						<input
							type="checkbox"
							id="pastaAndNoodles"
							bind:checked={donationTypes[3]}
							value="Pasta and Noodles"
						/> Pasta and Noodles
					</label>
					<label for="dairyProducts">
						<input
							type="checkbox"
							id="dairyProducts"
							bind:checked={donationTypes[4]}
							value="Dairy Products"
						/> Dairy Products
					</label>
					<label for="breadAndBakedGoods">
						<input
							type="checkbox"
							id="breadAndBakedGoods"
							bind:checked={donationTypes[5]}
							value="Bread and Baked Goods"
						/> Bread and Baked Goods
					</label>
					<!-- Add more checkboxes here -->
				</div>
				<div class="checkbox-column">
					<label for="meatAndPoultry">
						<input
							type="checkbox"
							id="meatAndPoultry"
							bind:checked={donationTypes[6]}
							value="Meat and Poultry"
						/> Meat and Poultry
					</label>
					<label for="seafood">
						<input type="checkbox" id="seafood" bind:checked={donationTypes[7]} value="Seafood" /> Seafood
					</label>
					<label for="babyFood">
						<input
							type="checkbox"
							id="babyFood"
							bind:checked={donationTypes[8]}
							value="Baby Food"
						/> Baby Food
					</label>
					<label for="eggs">
						<input type="checkbox" id="eggs" bind:checked={donationTypes[9]} value="Eggs" /> Eggs
					</label>
					<label for="frozenFoods">
						<input
							type="checkbox"
							id="frozenFoods"
							bind:checked={donationTypes[10]}
							value="Frozen Foods"
						/> Frozen Foods
					</label>
					<label for="snackFoods">
						<input
							type="checkbox"
							id="snackFoods"
							bind:checked={donationTypes[11]}
							value="Snack Foods"
						/> Snack Foods
					</label>
					<!-- Add more checkboxes here -->
				</div>
				<div class="checkbox-column">
					<label for="breakfastCereals">
						<input
							type="checkbox"
							id="breakfastCereals"
							bind:checked={donationTypes[12]}
							value="Breakfast Cereals"
						/> Breakfast Cereals
					</label>
					<label for="cookingOil">
						<input
							type="checkbox"
							id="cookingOil"
							bind:checked={donationTypes[13]}
							value="Cooking Oil"
						/> Cooking Oil
					</label>
					<label for="spicesAndSeasonings">
						<input
							type="checkbox"
							id="spicesAndSeasonings"
							bind:checked={donationTypes[14]}
							value="Spices and Seasonings"
						/> Spices and Seasonings
					</label>
					<label for="condiments">
						<input
							type="checkbox"
							id="condiments"
							bind:checked={donationTypes[15]}
							value="Condiments"
						/> Condiments
					</label>
					<label for="beverages">
						<input
							type="checkbox"
							id="beverages"
							bind:checked={donationTypes[16]}
							value="Beverages"
						/> Beverages
					</label>
					<label for="other">
						<input type="checkbox" id="other" bind:checked={donationTypes[17]} value="Other" />
						Other
						<input
							type="text"
							id="otherDonation"
							bind:value={otherDonation}
							placeholder="Specify other donation type"
							on:input={handleOtherDonationChange}
						/>
					</label>
				</div>
			</div>
			<div class="form-section">
				<label for="estimatedWeight">Estimated Weight of Donation (lbs):</label>
				<p class="note">(This will help us assess how much vehicle space is needed for pickup.)</p>
				<input type="number" id="estimatedWeight" placeholder="Enter pounds" step="1" min="0" />
			</div>
			<div class="form-section">
				<label for="donationPhoto">Upload Photo of Donation:</label>
				<input type="file" id="donationPhoto" bind:files={donationPhoto} accept="image/*" />
			</div>

			<div class="form-section">
				<label for="pickupDate">Select Pickup Date:</label>
				<input type="date" id="pickupDate" bind:value={pickupDate} required />
			</div>

			<div class="form-section">
				<label for="pickupTime">Select Pickup Time Window:</label>
				<select id="pickupTime" bind:value={pickupTime} required>
					<option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
					<option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
					<option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
				</select>
			</div>
			<button type="submit">Submit Donation Request</button>
		</div>
	</form>
</main>

<style>
	.main-content {
		flex: 3;
		padding: 20px;
		margin: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
		background-color: #fff;

		color: #333;
	}

	h1 {
		text-align: left;
		display: block;
		border-bottom: 2px solid #eee;
		padding-bottom: 10px;
		margin-bottom: 20px;
		color: #333;
		font-size: 20px;
	}
	.form-section {
		margin-top: 30px;
		margin-bottom: 30px;
		text-align: left;
	}
	label {
		display: block;
		margin-top: 10px;
		font-weight: bold;
	}

	input[type='text'],
	select,
	input[type='date'],
	input[type='file'] {
		width: 300px;
		padding: 10px;
		margin-top: 5px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 16px;
	}

	input[type='number'] {
		width: 130px;
		padding: 10px;
		margin-top: 5px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 16px;
	}

	input[type='file'] {
		margin-top: 5px;
		font-size: 16px;
	}

	button {
		display: block;
		background-color: #e18358;
		color: #fff;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
		margin-top: 10px;
		/* margin: 0 auto; Center-align the button */
	}

	button:hover {
		background-color: rgba(250, 176, 92, 0.881);
	}

	#shelterResults {
		margin-top: 10px;
	}

	.checkbox-columns {
		display: flex;
		justify-content: space-between;
	}

	.checkbox-column {
		flex: 1;
	}
	.checkbox-columns label {
		font-weight: normal;
	}
	.note {
		font-size: 14px;
		margin-top: 4px;
		margin-bottom: 4px;
	}
</style>
