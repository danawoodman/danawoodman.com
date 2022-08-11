<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";

	export const prerender = true;

	export let title;
	export let image;
	export let draft;
	export let published;
	export let categories;
	export let tags;

	$: pubDate = new Date(published);
</script>

<svelte:head>
	<title>{title}</title>

	{#if draft}
		<meta name="robots" content="noindex,nofollow" />
	{/if}

	<meta name="author" content="Dana Woodman" />
	<!-- <meta name="description" content="Are you getting a 0x80070057 error in Minecraft? Full error message, &quot;We weren&#039;t able to install the app (0x80070057)&quot;." /> -->
	<!-- <link rel="canonical" href="https://www.followchain.org/werent-able-to-install-app-minecraft/" /> -->
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<!-- <meta property="og:description" content="Are you getting a 0x80070057 error in Minecraft? Full error message, &quot;We weren&#039;t able to install the app (0x80070057)&quot;." /> -->
	<!-- <meta property="og:url" content="https://www.followchain.org/werent-able-to-install-app-minecraft/" /> -->
	<meta property="og:site_name" content="Dana Woodman" />
	<!-- <meta property="article:publisher" content="https://facebook.com/followchain" /> -->
	<meta property="article:published_time" content={pubDate.toUTCString()} />
	<!-- <meta property="article:modified_time" content="2022-01-26T07:54:29+00:00" /> -->
	<!-- <meta property="og:image" content="https://www.followchain.org/wp-content/uploads/2022/01/29_x_2_35.png" /> -->
	<!-- <meta property="og:image:width" content="644" /> -->
	<!-- <meta property="og:image:height" content="483" /> -->
	<!-- <meta property="og:image:type" content="image/png" /> -->
	<!-- <meta name="twitter:card" content="summary_large_image" /> -->
	<meta name="twitter:creator" content="@https://www.twitter.com/danawoodman" />
	<meta name="twitter:site" content="@danawoodman" />
	<meta name="twitter:label1" content="Written by" />
	<meta name="twitter:data1" content="Dana Woodman" />
	<!-- <meta name="twitter:label2" content="Est. reading time" />
	<meta name="twitter:data2" content="5 minutes" /> -->
</svelte:head>

<Header />

<main class="px-6">
	<article class="max-w-prose my-8 mx-auto" id="article-content">
		<!-- <CategoryBreadcrumbs {categories} /> -->
		{#if draft}
			<p class="mb-6">
				<strong
					class="bg-red-400 text-white px-4 py-2 rounded-md font-bold text-xl"
				>
					DRAFT
				</strong>
			</p>
		{/if}
		<header class="mt-4">
			<h1 class="text-4xl font-extrabold mb-6" id="article-title">
				{title}
			</h1>
			{#if published}
				<div class="flex items-center mb-10">
					<!-- <address>
        <Avatar />
        <a href="/authors/danawoodman" rel="author" class="ml-4">
          Dana Woodman</a
        >
      </address> -->
					<p class="text-gray-500 text-sm">
						Published
						<time
							class="ml-1"
							datetime={pubDate.toDateString()}
							title={pubDate.toLocaleDateString()}
							>{pubDate.toLocaleDateString()}</time
						>
					</p>
				</div>
			{/if}
		</header>
		<div class="prose">
			<slot />
			<hr />
			<p class="mt-6">
				<strong>Like this post?</strong>
				<br />
				Why don't you let me know on Twitter:
				<a
					href="https://twitter.com/danawoodman"
					target="_blank"
					rel="noopener noreferrer">@danawoodman</a
				>
			</p>
		</div>
	</article>
</main>

<Footer />

<style lang="postcss">
	:global(html),
	:global(body) {
		@apply bg-gray-50;
	}
</style>
