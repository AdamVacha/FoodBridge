<!DOCTYPE html>
<html lang="en">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>FoodBridge</title>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&display=swap"
			rel="stylesheet"
		/>
	</head>
	<body>
		<section class="header">
			<nav>
				<a href="index.html" class="logo-container">
					<img src="images/logo.png" alt="FoodBridge Logo" class="logo" />
				</a>
				<div class="nav-links" id="navLinks">
					<ion-icon class="menu" name="close-outline" onclick="hideMenu()" />

					<ul>
						<li><a href="">HOME</a></li>
						<li><a href="">ABOUT US</a></li>
						<li><a href="">DONATE/REGISTER</a></li>
						<li><a href="">LOGIN</a></li>
						<li><a href="">SHELTER FINDER</a></li>
					</ul>
				</div>
				<ion-icon class="menu" name="menu-outline" onclick="showMenu()" />
			</nav>

			<div class="welcome-box">
				<h1>Welcome to FoodBridge</h1>
				<p>Where Nutrition Meets Compassion</p>
				<p>
					We are a community-driven platform dedicated to helping bridge the gap<br /> between food donors
					and shelters.
				</p>
				<!-- <p>Our mission is to ensure no one goes hungry. With FoodBridge, you can make a meaningful impact on your community by donating surplus food and supporting local shelters.</p> -->
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
							<ion-icon name="star-outline" />
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

		<!---------Footer--------->
        <section class="footer">
            <div class="row">
                <!-- Logo Column -->
                <div class="footer-col">
                    <a href="index.html" class="logo-container">
                        <img src="images/logo.png" alt="FoodBridge Logo" class="logo" />
                    </a>
                </div>
        
                <!-- Contact Us Column -->
                <div class="footer-col">
                    <h3>Contact Us</h3>
                    <p>
                        FoodBridge Inc.
                        <br />1234 Harmony Lane
                        <br />Suite 567
                        <br />Orlando, FL 32801
                    </p>
                </div>
        
                <!-- Social Media Icons Column -->
                <div class="footer-col">
                    <h3>Follow Us</h3>
                    <div class="social-icons">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <!-- Add more social media icons as needed -->
                    </div>
                </div>
            </div>
        </section>

		<script
			type="module"
			src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
		></script>
		<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
		<script>
			function showMenu() {
				const navLinks = document.getElementById('navLinks');
				if (navLinks) {
					navLinks.style.right = '0';
				}
			}

			function hideMenu() {
				const navLinks = document.getElementById('navLinks');
				if (navLinks) {
					navLinks.style.right = '-200px';
				}
			}
		</script>
	</body>
</html>

<style>
	* {
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
	}
	.header {
		min-height: 90vh;
		width: 100%;
		background-position: 45% center;
		background-size: cover;
		position: relative;
		background-image: url('images/homepage.jpeg');
	}

	/* Create a pseudo-element for the overlay */
	.header::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(120, 88, 51, 0.705);
	}

	.logo-container {
		position: relative;
		z-index: 1;
	}

	.logo {
		width: 150px;
	}

	nav {
		display: flex;
		padding: 2% 6%;
		justify-content: space-between;
		align-items: center;
	}
	.nav-links {
		flex: 1;
		text-align: right;
	}
	.nav-links ul li {
		list-style: none;
		display: inline-block;
		padding: 8px 12px;
		position: relative;
	}
	.nav-links ul li a {
		color: white;
		text-decoration: none;
		font-size: 15px;
	}
	.nav-links ul li::after {
		content: '';
		width: 0%;
		height: 2px;
		background: #fec528;
		display: block;
		margin: auto;
		transition: 0.5s;
	}
	.nav-links ul li:hover::after {
		width: 100%;
	}
	section {
		padding: 80px 0;
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
	.menu {
		display: none;
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
    /* Footer styles */
.footer {
    padding: 20px 6%;
    background-color: #333; /* Optional: Add a background color for better visibility */
    color: #fff;
}

.footer .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-col {
    flex: 1; /* Equal width for all columns */
    text-align: center;
}
.footer-col p{
    font-size: 16px;
    line-height: 26px;
} 
/* Social Icons styles */
.social-icons {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 10px; /* Spacing between icons */
}

.social-icons ion-icon {
    font-size: 24px; /* Adjust the size as needed */
    cursor: pointer;
}
	@media (max-width: 700px) {
		.welcome-box h1 {
			font-size: 24px;
		}
		.nav-links ul li {
			display: block;
			padding-top: 20px;
			padding-bottom: 20px;
		}
		.nav-links {
			position: absolute;
			background: #ff9e3c;
			height: 100vh;
			width: 200px;
			top: 0;
			right: -200px;
			text-align: left;
			z-index: 2;
		}
		.menu {
			display: block;
			color: white;
			margin: 10px;
			font-size: 22px;
			cursor: pointer;
		}
		.nav-links ul {
			padding: 20px;
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
