<script>
	import SocialLinks from './SocialLinks.svelte'
</script>

<footer class="py-20 clear-both" id="page-footer">
	<div class="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
		<div class="my-8">
			<SocialLinks />
		</div>
		<div class="text-gray-400 my-4 md:ml-auto">
			<small
				>Site built with SvelteKit, MDsveX, and TailwindCSS. <a
					class="underline hover:text-emerald-600"
					href="/sitemap.xml"
					target="_blank"
					title="View the sitemap">Sitemap</a
				>.</small
			>
		</div>
	</div>
</footer>
