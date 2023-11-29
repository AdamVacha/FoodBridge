<script>
	import Footer from '../../Footer.svelte';
	import Header from '../../Header.svelte';
	import {
		Home,
		Clock,
		Heart,
		LineChart,
		HeartHandshake,
		CalendarDays,
		Settings
	} from 'lucide-svelte';
	// A sample array of donations. Fetch this data from backend.
	let recentDonations = [
		{
			date: '03-05-2023',
			items: 'Canned Goods',
			quantity: '10 lbs',
			destination: 'Springfield Community Shelter',
			status: 'Received'
		}
	];
</script>

<!-- todo: extend background image into header-->
<div class="page-wrapper">
	<Header />

	<main>
		<div class="donor-header">
			<img src="/images/user2.jpeg" alt="Profile Photo" class="profile-pic" />
			<div class="donor-info">
				<h2>Jane Smith</h2>
				<p><Clock color="grey" fill="white" size="15px" /> Last donated 37 mins ago</p>
				<p><Heart color="grey" fill="white" size="15px" /> Donor for 7 months</p>
			</div>
		</div>
		<div class="profile-page">
			<aside class="sidebar">
				<nav class="donor-nav">
					<ul>
						<li>
							<a href="/pages/donor profile/dashboard">
								<Home color="grey" fill="white" size="15px" /> Dashboard</a
							>
						</li>
						<li>
							<a href="/pages/donor profile/donation form"
								><HeartHandshake color="grey" fill="white" size="15px" /> Make Donation</a
							>
						</li>
						<li>
							<a href="#"><CalendarDays color="grey" fill="white" size="15px" /> Donation History</a
							>
						</li>
						<li><a href="#"><Settings color="grey" fill="white" size="15px" /> Edit Profile</a></li>
					</ul>
				</nav>
			</aside>
			<slot />
		</div>
	</main>
	<Footer />
</div>

<style>
	.page-wrapper {
		min-height: 100vh;
		width: 100%;
		background-position: center;
		background-size: cover;
		position: relative;
		background-image: linear-gradient(rgba(170, 108, 84, 0.795), rgba(86, 73, 49, 0.702)),
			url('/images/food.jpeg');
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1 0 auto;
		padding: 40px;
		padding-top: 10px;
	}
	.profile-page {
		display: flex;
		max-width: 1200px;
		margin: 0 auto;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
		position: relative;
		background-color: rgba(255, 255, 255, 0.9);
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		overflow: hidden;
	}

	.donor-header {
		display: flex;
		background-color: #fff;
		align-items: center;
		text-align: left;
		color: #333;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
		max-width: 1200px;
		margin: 0 auto;
		gap: 5px;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
	}
	.sidebar {
		flex: 0.7;
		background-color: #f8f8f8;
		text-align: left;
	}

	.profile-pic {
		display: inline;
		width: 120px;
		height: 120px;
		border-radius: 50%;
		border: 3px solid #ccc;
		margin: 30px;
		margin-left: 70px;
		margin-right: 60px;
	}

	.donor-info h2 {
		font-size: 1.5em;
		color: #333;
		margin-bottom: 5px;
	}
	.donor-info {
		color: #666;
		font-size: 0.9em;
		margin-bottom: 20px;
	}

	.donor-nav ul {
		list-style-type: none;
		padding: 0;
	}

	.donor-nav li a {
		display: block;
		padding: 10px;
		color: #333;
		text-decoration: none;
		border-left: 3px solid transparent;
	}

	.donor-nav li a:hover {
		border-left: 3px solid rgb(207, 102, 10);
		background-color: #e8e8e8;
	}
</style>
