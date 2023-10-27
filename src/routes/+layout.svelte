<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<!-- todo: extend background image into header-->
<!-- <main> -->
<Header />
<slot />
<Footer />
<!-- </main> -->

<!-- <style>
	main {
		min-height: 100vh;
		width: 100%;
		background-position: 45% center;
		background-size: cover;
		position: relative;
		background-image: url('images/homepage.jpeg');
	}
	main::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(120, 88, 51, 0.705);
	}
</style> -->
