<section class="main">
	<section class="register">
		<h1>Register</h1>
		<!-- Registration Section -->
		<form action="/register" method="post">
			<div class="input-wrapper role-selection">
				<span class="role-label">I am registering as:</span>
				<div class="role-options">
					<input type="checkbox" id="donor" name="role" value="donor" />
					<label for="donor">Donor</label>

					<input type="checkbox" id="donation_center" name="role" value="donation_center" />
					<label for="donation_center">Donation Center</label>
				</div>
			</div>

			<script>
				function uncheck(id) {
					document.getElementById(id).checked = false;
				}
			</script>
			<div class="input-wrapper">
				<label for="username">Username:</label>
				<input type="text" id="username" name="username" required />
			</div>
			<div class="input-wrapper">
				<label for="email">Email:</label>
				<input type="email" id="email" name="email" required />
			</div>
			<div class="input-wrapper">
				<label for="password">Password:</label>
				<input type="password" id="password" name="password" required />
			</div>
			<div class="input-wrapper">
				<label for="confirm-password">Confirm Password:</label>
				<input type="password" id="confirm-password" name="confirm-password" required />
			</div>
			<div class="submit-btn">
				<button type="submit">Register</button>
			</div>
		</form>
		<!-- End of Registration Section -->
	</section>
</section>

<style>
	.main {
		min-height: 100vh;
		width: 100%;
		background-position: center;
		background-size: cover;
		position: relative;

		background-image: linear-gradient(rgba(170, 108, 84, 0.795), rgba(86, 73, 49, 0.702)),
			url('/images/fancyfood.jpeg');
	}

	.register {
		padding-left: 6.5%;
		padding-right: 45%;
		padding-bottom: 50px;
		color: white;
		text-align: left;
	}
	.register h1,
	p {
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

	.role-selection {
		margin-bottom: 20px;
	}

	.role-label {
		display: block;
		margin-bottom: 15px;
		font-weight: 600;
		color: rgb(255, 177, 99);
	}

	.role-options {
		display: flex;
		align-items: center;
	}

	.role-options label {
		margin-right: 30px;
		font-weight: normal;
		position: relative;
		padding-left: 25px;
		cursor: pointer;
	}

	/* hide default checkboxes */
	.role-options input[type='checkbox'] {
		position: absolute;
		opacity: 0;
		height: 0;
		width: 0;
	}

	/* Create custom checkboxes using pseudo-elements */
	.role-options label:before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 18px;
		height: 18px;
		border: 2px solid rgba(255, 177, 99, 0.6);
		border-radius: 3px;
		background-color: transparent;
		transition: background-color 0.3s ease;
	}

	/* Styling when checkbox is checked */
	.role-options input[type='checkbox']:checked + label:before {
		background-color: rgba(255, 177, 99, 0.6);
	}

	.role-options label:after {
		content: '\2713';
		position: absolute;
		top: 50%;
		left: 4px;
		transform: translateY(-50%) scale(0);
		color: white;
		font-size: 14px;
		transition: transform 0.3s ease;
	}

	.role-options input[type='checkbox']:checked + label:after {
		transform: translateY(-50%) scale(1);
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

	.register {
		padding-left: 6.5%;
		padding-right: 45%;
		color: white;
		text-align: left;
	}
	.register h1,
	p {
		margin-right: 20px;
	}
</style>
