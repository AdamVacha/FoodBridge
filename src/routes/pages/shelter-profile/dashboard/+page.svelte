<script>
	// @ts-nocheck

	import { LineChart, CalendarDays } from 'lucide-svelte';

	// A sample array of donations. Fetch this data from backend.
	let recentDonations = [
		{
			date: '03-05-2023',
			items: 'Canned Goods',
			quantity: '10 lbs',
			donor: 'Jane Smith',
			status: 'Received'
		}
	];
</script>

<main class="main-content">
	<section class="giving-stats">
		<h2><LineChart color="grey" fill="white" size="15px" /> Your FoodBridge Stats</h2>
		<div class="stat-boxes">
			<div class="stat-box">
				<p>TOTAL DONATIONS</p>
				<h3>4</h3>
			</div>
			<div class="stat-box">
				<p>TOTAL WEIGHT DONATED</p>
				<h3>50 lbs</h3>
			</div>
			<div class="stat-box">
				<p>TYPE OF FOOD MOST DONATED</p>
				<h3>Canned Goods</h3>
			</div>
			<div class="stat-box">
				<p>TOTAL DONORS</p>
				<h3>3</h3>
			</div>
		</div>
	</section>
	<section class="recent-donations">
		<h2><CalendarDays color="grey" fill="white" size="15px" /> Recent Donations</h2>
		<table class="donations-table">
			<thead>
				<tr>
					<th>Date</th>
					<th>Items</th>
					<th>Quantity</th>
					<th>Donor</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{#each recentDonations as donation}
					<tr class="donation-entry">
						<td>{donation.date}</td>
						<td>{donation.items}</td>
						<td>{donation.quantity}</td>
						<td>{donation.donor}</td>
						<td>{donation.status}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
</main>

<style>
	.main-content {
		flex: 3;
		padding: 20px;
	}
	.giving-stats h2 {
		display: block;
		margin-left: 15px;
		border-bottom: 2px solid #eee;
		padding-bottom: 10px;
		margin-bottom: 20px;
		color: #333;
	}
	.giving-stats {
		background-color: #fff;
		padding: 20px;
		margin-bottom: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	}
	.stat-boxes {
		display: flex;
		justify-content: space-around;
		background-color: #fff;

		margin-bottom: 20px;
	}
	.stat-box {
		text-align: center;
		margin: 10px;
		padding: 15px;
		background-color: #f8f8f8;
		border-radius: 10px;
	}

	.stat-box h3 {
		font-size: 20px;
		color: #333;
		margin: 5px;
	}
	.recent-donations {
		background-color: #fff;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	}

	.recent-donations h2 {
		border-bottom: 2px solid #eee;
		padding-bottom: 10px;
		margin-bottom: 20px;
		color: #333;
	}

	.donations-table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 20px;
	}

	.donations-table th,
	.donations-table td {
		text-align: center;
		padding: 8px;
		border-bottom: 1px solid #eee;
	}

	.donations-table th {
		background-color: #f8f8f8;
		text-align: center;
	}

	.donation-entry:nth-child(even) {
		background-color: #f9f9f9;
	}

	.donation-entry {
		background-color: #f9f9f9;
		border-right: 4px solid #4caf50; /* green accent color for received, yellow for pending */
		margin-bottom: 15px;
		padding: 20px;
		border-radius: 4px;
	}
</style>
