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
				<h1>Register</h1>
                <!-- Registration Section -->
                <form action="/register" method="post">
                    <div class="input-wrapper">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div class="input-wrapper">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="input-wrapper">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <div class="input-wrapper">
                        <label for="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" name="confirm-password" required>
                    </div>
                    <div class="submit-btn">
                        <button type="submit">Register</button>
                    </div>
                </form>
                <!-- End of Registration Section -->
					
            </section>
            <Footer />
		</section>
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

	.register {
    padding-left: 6.5%;
    padding-right: 45%;
    padding-bottom: 50px;
    color: white;
    text-align: left;
	}	
	.register h1, p {
		margin-right: 20px; 
	}

	h1 {
		font-size: 42px;
		color: rgb(255, 177, 99);
		margin-bottom: 20px;
		margin-top: 20px;
	}

    .input-wrapper {
        margin-bottom: 15px;
    }

    label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
    }

    input {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: 2px solid rgba(255, 177, 99, 0.6);
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        color: white;
        outline: none;
    }

    input:focus {
        border-color: rgb(255, 177, 99);
    }

    .submit-btn {
    margin-top: 20px;
    margin-bottom: 30px;
}

    button {
        padding: 10px 15px;
        background-color: rgb(255, 177, 99);
        border: none;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 600;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: rgba(255, 177, 99, 0.8);
    }
</style>
