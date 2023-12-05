<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section class="main">
	<section class="register">
		<h1>Register</h1>
		<!-- Registration Section -->
		<form use:enhance action="/pages/register/?/create" method="post" autocomplete="on">
			<div class="input-wrapper">
				<span class="role-label">I am registering as:</span>
				<div class="role-options">
					<input type="radio" id="donor" name="role" value="donor" />
					<label for="donor">Donor</label>

					<input type="radio" id="donation_center" name="role" value="donation_center" />
					<label for="donation_center">Donation Center</label>
				</div>
			</div>
			<div class="input-wrapper">
				<label for="username">Username:</label>
				<input
					type="text"
					id="username"
					name="username"
					required
					value={data.session?.user?.name}
				/>
			</div>
			<div class="input-wrapper">
				<label for="email">Email:</label>
				<input type="email" id="email" name="email" required value={data.session?.user?.email} />
			</div>

			<div class="submit-btn">
				<button type="submit">Register</button>
			</div>
		</form>
		<!-- End of Registration Section -->
	</section>
</section>

<style>
	.register {
		padding-left: 6.5%;
		padding-right: 45%;
		padding-bottom: 50px;
		color: white;
		text-align: left;
	}

	h1 {
		font-size: 42px;
		color: rgb(255, 177, 99);
		margin-bottom: 20px;
		margin-top: 20px;
	}

	.input-wrapper {
		margin-bottom: 25px;
	}

	label {
		display: block;
		margin-top: 5px;
		margin-bottom: 5px;
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
	input[type='radio'] {
		width: auto;
		margin-right: 10px;
		appearance: none;
		padding: 5px;
		border: 2px solid rgb(255, 177, 99);
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
	}
	input[type='radio']:checked {
		background-color: rgb(240, 111, 42);
	}

	input:focus {
		border-color: rgb(255, 177, 99);
	}

	.role-label {
		margin-bottom: 15px;
		font-weight: 600;
		color: rgb(255, 177, 99);
		display: block;
	}

	.role-options {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.role-options label {
		margin-right: 40px;
		padding-left: 0;
		font-weight: normal;

		cursor: pointer;
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
