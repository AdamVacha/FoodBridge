<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<section class="main">
	<section class="login">
		<!-- Authentication Section -->
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
