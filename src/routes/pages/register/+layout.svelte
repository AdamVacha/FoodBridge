<script>
	import Footer from '../../Footer.svelte';
	import Header from '../../Header.svelte';
</script>

<!-- todo: extend background image into header-->
<div class="page-wrapper">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.page-wrapper {
		min-height: 100vh;
		width: 100%;
		background-position: center;
		background-size: cover;
		position: relative;
		background-image: linear-gradient(rgba(170, 108, 84, 0.795), rgba(86, 73, 49, 0.702)),
			url('/images/');
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1 0 auto;
	}
</style>
