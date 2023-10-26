<!---------Footer--------->
<!DOCTYPE html>
<html lang="en">
	<footer>
		<div class="row">
			<!-- Logo Column -->
			<div class="footer-col">
				<a href="/" class="logo-container">
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
					<ion-icon name="logo-facebook" />
					<ion-icon name="logo-twitter" />
					<ion-icon name="logo-instagram" />
					
				</div>
			</div>
		</div>
	</footer>
	<script
		type="module"
		src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
	></script>
	<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</html>

<style>
	footer {
		padding: 20px 6%;
		background-color: #333; /* Optional: Add a background color for better visibility */
		color: #fff;
	}

	footer .row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer-col {
		flex: 1; /* Equal width for all columns */
		text-align: center;
	}
	.footer-col p {
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

	.logo-container {
		position: relative;
		z-index: 1;
	}

	.logo {
		width: 150px;
	}

	@media (max-width: 700px) {
		p {
			font-size: 20px;
			font-weight: 500;
			line-height: 22px;
			padding: 10px;
		}
	}
</style>
