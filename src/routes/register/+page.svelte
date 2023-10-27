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
			<section class="register">
			<h1> HELLO THERE </h1>
                 <!-- Registration Section -->
                 
                <!-- End of Registration Section -->
					
            </section>
			
		</section>
        <Footer />
    </body>
	
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
    .register{
    
    padding-left: 6.5%;
    padding-right: 45%;
    color: white;
     text-align:left;
   

    }
.register h1, p{
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
