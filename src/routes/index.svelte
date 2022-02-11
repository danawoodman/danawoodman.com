<script context="module" lang="ts">
  import type { LoadOutput } from "@sveltejs/kit";
  import { getPosts } from "./_posts";

  export async function load(): Promise<LoadOutput> {
    const posts = await getPosts();
    return { props: { posts } };
  }
</script>

<script lang="ts">
  import CategoryBreadcrumbs from "$lib/components/CategoryBreadcrumbs.svelte";

  export let posts = [];
</script>

<section class="max-w-prose mx-auto">
  <h1 class="text-3xl mb-6 font-bold">Posts</h1>
  <nav>
    {#each posts as post}
      {@const pubDate = new Date(post.published)}
      <article class="my-12 border border-gray-200 rounded-lg shadow-lg">
        <!-- <div class="mb-4">
          <CategoryBreadcrumbs categories={post.categories} />
        </div> -->
        {#if post.image}
          <img
            src={`/images/${post.image}`}
            alt={post.title}
            class="w-full rounded-t-lg"
          />
        {/if}
        <header class="px-8 py-6">
          {#if post.categories?.length}
            <h3 class="mb-2">
              <a href="/" class="font-bold text-indigo-600 uppercase text-sm"
                >{post.categories[post.categories.length - 1]}</a
              >
            </h3>
          {/if}
          <h2 class="text-xl font-bold hover:text-brand transition-colors">
            <a href={post.slug} class="">{post.title}</a>
          </h2>
          {#if post.description}
            <div class="prose mt-1 text-gray-600">{post.description}</div>
          {/if}
          {#if post.published}
            <p class="mt-4">
              <svg
                aria-hidden="true"
                focusable="false"
                class="inline-block"
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
            </p>
          {/if}
        </header>
      </article>
    {/each}
  </nav>
</section>
