<script context="module" lang="ts">
	import type { LoadOutput } from "@sveltejs/kit";
	import { getPosts } from "./_posts";

	export const prerender = true;

	export async function load(): Promise<LoadOutput> {
		const posts = await getPosts();
		return { props: { posts } };
	}
</script>

<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";

	export let posts = [];
	// const tags = [
	// 	...posts.reduce((tags, post) => {
	// 		post?.tags?.forEach((t) => tags.add(t));
	// 		return tags;
	// 	}, new Set()),
	// ];
</script>

<Header />

<section class="max-w-prose mx-auto my-12">
	<h1 class="text-4xl mb-6 font-bold">Writing</h1>

	<!--{#if tags?.length}
		<strong class="mr-4">Filter by tag:</strong>
		{#each tags as tag}
			<button class="tag">{tag}</button>
		{/each}
	{/if}-->

	{#each posts as post}
		{@const pubDate = new Date(post.published)}
		<article
			class="bg-white my-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all scale-100 hover:scale-105"
		>
			<!-- <div class="mb-4">
          <CategoryBreadcrumbs categories={post.categories} />
        </div> -->
			<!-- {#if post.image}
          <img
            src={`/images/${post.image}`}
            alt={post.title}
            class="w-full rounded-t-lg"
          />
        {/if} -->
			<header class="px-8 py-6">
				<h2 class="text-xl font-bold hover:text-emerald-600 transition-colors">
					<a href={"/writing" + post.slug} class="">{post.title}</a>
				</h2>
				{#if post.description}
					<div class="prose mt-1 text-gray-600">{post.description}</div>
				{/if}
				<div class="flex items-center mt-4">
					{#if post.tags?.length}
						<p>
							{#each post.tags as tag, i}
								<span class="tag mr-2" class:mr-0={i === post.tags.length - 1}>
									{tag}
								</span>
							{/each}
						</p>
						{#if post.published}
							<p class="ml-auto">
								<time
									class="text-gray-500 text-sm"
									datetime={pubDate.toDateString()}
									title={pubDate.toLocaleDateString()}
									>{pubDate.toLocaleDateString()}</time
								>
							</p>
						{/if}
					{/if}
				</div>
			</header>
		</article>
	{/each}
</section>

<Footer />

<style lang="postcss">
	.tag {
		@apply text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full;
		font-size: 0.75rem;
	}
</style>
