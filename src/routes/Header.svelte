<!-- Header.svelte -->
<script>
	function showMenu() {
		const navLinks = document.getElementById('navLinks');
		if (navLinks) {
			navLinks.style.right = '0';
		}
	}

	function hideMenu() {
		const navLinks = document.getElementById('navLinks');
		if (navLinks) {
			navLinks.style.right = '-200px';
		}
	}
</script>

<nav class="header">
	<a href="/" class="logo-container">
		<img src="/images/logo.png" alt="FoodBridge Logo" class="logo" />
	</a>
	<div class="nav-links" id="navLinks">
		<ion-icon class="menu" name="close-outline" on:click={hideMenu} />

		<ul>
			<li><a href="/">HOME</a></li>
			<li><a href="/pages/about">ABOUT US</a></li>
			<li><a href="/pages/register">REGISTER</a></li>
			<li><a href="/pages/login">LOGIN</a></li>
			<li><a href="/pages/shelter finder">SHELTER FINDER</a></li>
		</ul>
	</div>
	<ion-icon class="menu" name="menu-outline" on:click={showMenu} />
</nav>

<style>
	.header {
		width: 90%;
	}
	.menu {
		display: none;
	}

	.logo-container {
		position: relative;
		z-index: 1;
	}

	.logo {
		width: 150px;
	}

	nav {
		display: flex;
		padding: 4% 6%;
		justify-content: space-between;
		align-items: center;
	}
	.nav-links {
		flex: 1;
		text-align: right;
	}
	.nav-links ul li {
		list-style: none;
		display: inline-block;
		padding: 8px 12px;
		position: relative;
	}
	.nav-links ul li a {
		color: white;
		text-decoration: none;
		font-size: 15px;
	}
	.nav-links ul li::after {
		content: '';
		width: 0%;
		height: 2px;
		background: #fec528;
		display: block;
		margin: auto;
		transition: 0.5s;
	}
	.nav-links ul li:hover::after {
		width: 100%;
	}

	@media (max-width: 700px) {
		.nav-links ul li {
			display: block;
			padding-top: 20px;
			padding-bottom: 20px;
		}
		.nav-links {
			position: absolute;
			background: #ff9e3c;
			height: 100vh;
			width: 200px;
			top: 0;
			right: -200px;
			text-align: left;
			z-index: 2;
		}
		.menu {
			display: block;
			color: white;
			margin: 10px;
			font-size: 22px;
			cursor: pointer;
		}
		.nav-links ul {
			padding: 20px;
		}
	}
</style>
