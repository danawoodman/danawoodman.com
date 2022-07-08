<script>
	import Avatar from './Avatar.svelte'
	import Nav from './Nav.svelte'
	import SocialLinks from './SocialLinks.svelte'
</script>

<div id="page-header" class="md:flex md:items-center max-w-4xl mx-auto py-4">
	<header>
		<div class="flex-shrink-0 flex items-center">
			<a href="/">
				<Avatar size={40} />
			</a>
			<a href="/">
				<h1 class="ml-4 font-bold">
					<span class="enlarge">D</span>ANA
					<span class="enlarge">W</span>OODMAN
				</h1>
			</a>
		</div>
	</header>
	<div class="md:ml-auto md:flex flex-col md:flex-row md:items-center">
		<div class="mt-4 md:mt-0">
			<Nav />
		</div>
		<div class="md:ml-10 mt-4 md:mt-0">
			<SocialLinks />
		</div>
	</div>
</div>

<style lang="postcss">
	.enlarge {
		font-size: 1.2em;
	}
</style>
