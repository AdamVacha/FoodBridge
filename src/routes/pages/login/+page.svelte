<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';

	async function handleSignIn() {
		await signIn('github');
		// Call the endpoint to check user and redirect
		const response = await fetch('/api/post-login');
		const { redirectTo } = await response.json();
		window.location.href = redirectTo; // Redirect based on server response
	}
</script>

<section class="main">
	<section class="login">
		<!-- Authentication Section -->

		<h1>Login</h1>

		<div class="auth-section">
			{#if $page.data.session}
				{#if $page.data.session.user?.image}
					<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
				{/if}
				<span class="signedInText">
					<small>Signed in as</small><br />
					<strong>{$page.data.session.user?.name ?? 'User'}</strong>
				</span>
				<button on:click={() => signOut()} class="button">Sign out</button>
			{:else}
				<span class="notSignedInText">You are not signed in</span>
				<button on:click={() => signIn('github')}>Sign In with GitHub</button>
			{/if}
		</div>
		<!-- End of Authentication Section -->
	</section>
</section>

<style>
	* {
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
	}
	.login {
		padding-left: 6.5%;
		padding-right: 45%;
		color: white;
		text-align: left;
	}
	h1 {
		text-align: center;
		font-size: 42px;
		color: rgb(255, 177, 99);
		margin-bottom: 20px;
		margin-top: 20px;
	}
	div {
		text-align: center;
	}
</style>
