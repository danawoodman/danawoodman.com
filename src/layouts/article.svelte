<script lang="ts">
  export let title;
  export let published;
  export let categories;
  // export let title: string;
  // export let published: string;
  // export let categories: string[];

  $: pubDate = new Date(published);
</script>

<svelte:head>
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

<article class="prose mx-w-prose px-8 my-12 mx-auto">
  {#if categories?.length}
    <nav class="flex items-center mb-6 text-sm">
      {#each categories as category, i}
        <a href="/categories/{category}">{category}</a>
        {#if i < categories.length - 1}
          <span class="mx-2 text-gray-400">
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="12"
              width="12"
              ><path
                fill="currentColor"
                d="M212.2 58.86l181.1 197.1L212.2 453.1c-2.844 3.078-4.25 6.969-4.25 10.86c0 4.312 1.719 8.609 5.156 11.75c6.5 6 16.59 5.594 22.59-.8906l192-208c5.688-6.156 5.688-15.56 0-21.72l-192-208c-6-6.484-16.09-6.891-22.59-.8906C206.6 42.22 206.2 52.36 212.2 58.86zM235.8 266.9c5.688-6.156 5.688-15.56 0-21.72l-192-208c-6-6.484-16.09-6.891-22.59-.8906c-6.531 5.969-6.906 16.11-.9062 22.61l181.1 197.1L20.26 453.1c-2.844 3.078-4.25 6.969-4.25 10.86c0 4.312 1.719 8.609 5.156 11.75c6.5 6 16.59 5.594 22.59-.8906L235.8 266.9z"
              /></svg
            >
          </span>
        {/if}
      {/each}
    </nav>
  {/if}
  <header>
    <h1 class="text-4xl font-bold">{title}</h1>
    <div class="flex items-center">
      <address>
        <a href="/authors/danawoodman" class="inline-block">
          <img
            src="https://www.gravatar.com/avatar/39807ce0d3f73fbd1fedb779d7b80851?s=30"
            alt="Photo of Dana Woodman"
            class="inline-block mr-3 rounded-full"
          />
        </a>
        <a href="/authors/danawoodman" rel="author"> Dana Woodman</a>
      </address>
      {#if published}
        <svg
          aria-hidden="true"
          focusable="false"
          class="inline-block ml-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="14"
        >
          <path
            fill="currentColor"
            d="M120 0C124.4 0 128 3.582 128 8V64H320V8C320 3.582 323.6 0 328 0C332.4 0 336 3.582 336 8V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H112V8C112 3.582 115.6 0 120 0zM432 192H16V448C16 474.5 37.49 496 64 496H384C410.5 496 432 474.5 432 448V192zM112 120V80H64C37.49 80 16 101.5 16 128V176H432V128C432 101.5 410.5 80 384 80H336V120C336 124.4 332.4 128 328 128C323.6 128 320 124.4 320 120V80H128V120C128 124.4 124.4 128 120 128C115.6 128 112 124.4 112 120z"
          />
        </svg>
        <time
          class="text-gray-500 ml-2 text-sm"
          datetime={pubDate.toDateString()}
          title={pubDate.toLocaleDateString()}
          >{pubDate.toLocaleDateString()}</time
        >
      {/if}
    </div>
  </header>
  <slot />
</article>
