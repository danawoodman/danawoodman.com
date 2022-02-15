<script context="module" lang="ts">
  import type { LoadOutput } from "@sveltejs/kit";
  import { getPosts } from "./_posts";

  export async function load(): Promise<LoadOutput> {
    const posts = await getPosts();
    return { props: { posts } };
  }
</script>

<script lang="ts">
  // import CategoryBreadcrumbs from "$lib/components/CategoryBreadcrumbs.svelte";

  export let posts = [];
</script>

<section class="max-w-prose mx-auto">
  <!-- <h1 class="text-3xl mb-6 font-bold">Recent Articles</h1> -->
  {#each posts as post}
    {@const pubDate = new Date(post.published)}
    {@const cat = post.categories?.length
      ? post.categories[post.categories.length - 1]
      : undefined}
    <article
      class="bg-white my-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
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
        {#if cat}
          <h3 class="mb-2">
            <span class="font-bold text-indigo-600 uppercase text-sm"
              >{cat}</span
            >
            <!-- <a
                href="/categories/{cat}"
                class="font-bold text-indigo-600 uppercase text-sm">{cat}</a
              > -->
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
            <time
              class="text-gray-500 text-sm"
              datetime={pubDate.toDateString()}
              title={pubDate.toLocaleDateString()}
              >{pubDate.toLocaleDateString()}</time
            >
          </p>
        {/if}
      </header>
    </article>
  {/each}
</section>
