<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<section class="main">
	<Header />
	<div class="welcome-box">
		<h1>Welcome to FoodBridge</h1>
		<p>Where Nutrition Meets Compassion</p>
		<p>
			We are a community-driven platform dedicated to helping bridge the gap<br /> between food donors
			and shelters.
		</p>
		<a href="" class="get-started">Get Started</a>
	</div>
</section>
<!-------Statistics------->

<section class="statistics">
	<h2>Our Statistics</h2>
	<div class="stat">
		<h3>5000+</h3>
		<p>Donors</p>
	</div>
	<div class="stat">
		<h3>10,000+</h3>
		<p>Meals Provided</p>
	</div>
	<div class="stat">
		<h3>150+</h3>
		<p>Shelters Helped</p>
	</div>
</section>

<!-- /* ----- Testimonials ----- */ -->
<section class="testimonials">
	<h2>What People Say</h2>
	<div class="row">
		<div class="testimonial-col">
			<img src="images/user1.jpeg" />
			<div>
				<p>"This platform has made it so easy to donate food. I'm glad I can help!"</p>
				<h3>- John Doe</h3>
				<div class="star-rating">
					<ion-icon name="star" />
					<ion-icon name="star" />
					<ion-icon name="star" />
					<ion-icon name="star" />
					<ion-icon name="star" />
				</div>
			</div>
		</div>
		<div class="testimonial-col">
			<img src="images/user2.jpeg" />
			<div>
				<p>"Amazing initiative. It's great to see communities come together for a cause."</p>
				<h3>- Jane Smith</h3>
				<div class="star-rating">
					<ion-icon name="star" />
					<ion-icon name="star" />
					<ion-icon name="star" />
					<ion-icon name="star" />
					<ion-icon name="star-half-outline" />
				</div>
			</div>
		</div>
	</div>
</section>
<Footer />

<style>
	* {
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
	}
	.main {
		min-height: 100vh;
		width: 100%;
		background-position: 45% center;
		background-size: cover;
		position: relative;
		background-image: url('images/homepage.jpeg');
	}

	/* Create a pseudo-element for the overlay */
	.main::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(120, 88, 51, 0.705);
	}
	.welcome-box {
		width: 90%;
		color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
	.welcome-box h1 {
		font-size: 62px;
		color: rgb(255, 177, 99);
	}
	.welcome-box p {
		margin: 10px 0 40px;
		font-size: 20px;
		color: rgb(255, 255, 255);
		line-height: 1.5;
	}
	.get-started {
		display: inline-block;
		text-decoration: none;
		font-weight: 600;
		color: rgb(0, 0, 0);
		border: 1px solid rgb(255, 255, 255);
		padding: 12px 34px;
		font-size: 156x;
		background: rgba(250, 176, 92, 0.887);
		position: relative;
		cursor: pointer;
		border-radius: 10px;
	}
	.get-started:hover {
		border: 1px solid #fec528;
		background: #fec528;
		color: #000000;
		transition: 1s;
	}

	/* ----Statistics---- */

	.statistics {
		width: 100%;
		margin: auto;
		background-color: #f3dfd0;
		text-align: center;
		padding-top: 60px;
		padding-bottom: 60px;
	}
	p {
		color: #df7b4c;
		font-size: 24px;
		font-weight: 500;
		line-height: 22px;
		padding: 10px;
	}
	.stat {
		padding-left: 100px;
		display: inline-block;
		margin: 30px 50px;
		position: relative;
	}
	.statistics h2 {
		font-size: 36px;
		margin-bottom: 20px;
	}
	.stat h3 {
		font-size: 30px;
		margin-bottom: 15px;
	}

	/* ----- Testimonials ----- */
	.row {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
	}

	.testimonials {
		width: 80%;
		margin: auto;
		text-align: center;
		padding-top: 80px;
	}
	.testimonials h2 {
		font-size: 36px;
		margin-bottom: 30px;
	}
	.testimonial-col {
		flex-basis: 44%;
		border-radius: 10px;
		margin-bottom: 5%;
		text-align: left;
		background: #fff3f3;
		padding: 25px;
		cursor: pointer;
		display: flex;
	}
	.testimonial-col img {
		height: 70px;
		margin-top: 10px;
		margin-left: 5px;
		margin-right: 30px;
		border-radius: 50%;
	}
	.testimonial-col p {
		padding: 0;
	}
	.testimonial-col h3 {
		margin-top: 15px;
		text-align: left;
	}
	.testimonial-col ion-icon {
		color: #df7b4c;
		font-size: 20px;
	}
	.star-rating {
		display: flex;
		justify-content: flex-start;
		margin-top: 10px;
	}

	@media (max-width: 700px) {
		.welcome-box h1 {
			font-size: 24px;
		}
		.welcome-box p {
			font-size: 16px;
		}
		.statistics {
			width: 100%;
			margin-bottom: 20px;
			flex-direction: column;
		}
		.stat {
			padding-left: 0;
			display: inline-block;
			margin: 30px 50px; /* Increased horizontal margin */
			position: relative;
		}

		p {
			font-size: 20px;
			font-weight: 500;
			line-height: 22px;
			padding: 10px;
		}

		.statistics h2 {
			font-size: 24px;
			margin-bottom: 15px;
		}
		.stat h3 {
			font-size: 20px;
			margin-bottom: 15px;
		}
		.row {
			flex-direction: column;
		}
		.testimonials {
			padding-top: 20px;
		}
		.testimonials h2 {
			font-size: 24px;
			margin-bottom: 20px;
		}
		.testimonials h3 {
			font-size: 16px;
		}
		.testimonials p {
			font-size: 16px;
		}
		.testimonial-col {
			margin-bottom: 40px;
		}
	}
</style>
