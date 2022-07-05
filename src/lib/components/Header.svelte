<script>
	import Avatar from './Avatar.svelte'
	import Nav from './Nav.svelte'
</script>

<div class="mb-12" id="page-header">
	<div class="flex items-center max-w-prose mx-auto py-6">
		<header>
			<div class="flex-shrink-0 flex items-center">
				<a href="/">
					<Avatar size={40} />
				</a>
				<a href="/">
					<h1 class="ml-4 font-bold">Dana Woodman</h1>
				</a>
			</div>
		</header>
		<div class="ml-auto">
			<Nav />
		</div>
	</div>
</div>
