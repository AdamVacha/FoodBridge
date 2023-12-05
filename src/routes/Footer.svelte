<script>
	import { Facebook } from 'lucide-svelte';
	import { Instagram } from 'lucide-svelte';
	import { Twitter } from 'lucide-svelte';
	import { Linkedin } from 'lucide-svelte';
</script>

<!---------Footer--------->
<footer>
	<div class="row">
		<!-- Logo Column -->
		<div class="footer-col">
			<a href="/" class="logo-container">
				<img src="/images/logo.png" alt="FoodBridge Logo" class="logo" />
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
				<Facebook />
				<Instagram />
				<Twitter />
				<Linkedin />
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 20px 6%;
		background-color: #333;
		color: #fff;
	}

	footer .row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer-col {
		flex: 1;
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
		gap: 10px;
		font-size: 24px;
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
