<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit'
	import { getPosts } from './writing/_posts'

	export const prerender = true

	export async function load(): Promise<LoadOutput> {
		const posts = await getPosts()
		return { props: { posts } }
	}
</script>

<script lang="ts">
	import Footer from '$lib/components/Footer.svelte'
	import Nav from '$lib/components/Nav.svelte'

	export let posts = []
</script>

<main class="max-w-prose mx-auto">
	<header class="my-8 flex items-center">
		<h1 class="text-xl uppercase font-bold tracking-wider">
			<span class="enlarge">D</span>ana <span class="enlarge">W</span>oodman
		</h1>
		<div class="ml-auto">
			<Nav />
		</div>
	</header>
</main>

<Footer />

<style lang="postcss">
	.enlarge {
		font-size: 1.18em;
	}
</style>
