<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
</script>

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
		<section class="main">
			<Header />
			<section class="about-us">
				<h1>About Us</h1>
				<div class="mission">
					<h2>Our Mission</h2>
					<p>
						To ensure that no one goes hungry, we've created FoodBridge, a community-driven platform
						dedicated to making a meaningful impact on local communities. We connect food donors
						with shelters, empowering individuals and organizations to contribute to the well-being
						of those in need.
					</p>
				</div>
				<div class="who-we-are">
					<h2>Who We Are</h2>
					<p>
						FoodBridge was founded by a group of individuals passionate about mitigating hunger and
						reducing food waste. We believe in the power of community and cooperation to drive
						positive change. Our team includes technologists, food enthusiasts, and social
						advocates, all working together to make a difference.
					</p>
				</div>
				<div class="what-we-do">
					<h2>What We Do</h2>
					<p>
						At FoodBridge, we bridge the gap between food surplus and those in need. Our platform
						allows food donors, whether individuals or businesses, to easily donate excess food to
						local shelters and food banks. We provide a streamlined process for scheduling pickups,
						tracking donations, and ensuring that no food goes to waste.
					</p>
				</div>
				<div class="our-values">
					<h2>Our Values</h2>
					<ul>
						<li>
							<strong>Compassion:</strong> We believe in the power of compassion to drive positive change
							in communities.
						</li>
						<li>
							<strong>Community:</strong> We foster a sense of community, uniting people with a common
							goal.
						</li>
						<li>
							<strong>Sustainability:</strong> We are committed to reducing food waste and promoting
							sustainability.
						</li>
						<li>
							<strong>Inclusivity:</strong> We embrace diversity and inclusivity in all our initiatives.
						</li>
					</ul>
				</div>
				<div class="join-our-mission">
					<h2>Join Our Mission</h2>
					<p>
						We invite you to join us in making a difference. Whether you're a potential donor, a
						shelter in need, or an individual looking to volunteer, there's a place for you in the
						FoodBridge community. Together, we can build a world where everyone has access to
						nutritious food.
					</p>
				</div>
			</section>

			
		</section>
        <Footer />
        </body
	>
	
</html>

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
		background-image: 
        linear-gradient(rgba(170, 108, 84, 0.795), rgba(86, 73, 49, 0.702)), 
        url('/images/fancyfood.jpeg');
}
    .about-us{
    
    padding-left: 6.5%;
    padding-right: 45%;
    color: white;
     text-align:left;
   

    }
.about-us h1, p{
    margin-right: 20px; 
}

h1 {
    font-size: 42px;
    color: rgb(255, 177, 99);
    margin-bottom: 20px;
    margin-top: 20px;
}
h2 {
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
}
p {
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: 20px;
}
ul {
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: 20px;
    
}
ul li {
    margin-bottom: 10px;
    margin-top: 10px;
}
</style>
