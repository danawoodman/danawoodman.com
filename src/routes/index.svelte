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
      <article class="my-12">
        <div class="mb-4">
          <CategoryBreadcrumbs categories={post.categories} />
        </div>
        <h2
          class="font-heading text-3xl font-extrabold hover:text-brand transition-colors"
        >
          <a href={post.slug} class="">{post.title}</a>
        </h2>
        {#if post.description}
          <div class="prose mt-1">{post.description}</div>
        {/if}
      </article>
    {/each}
  </nav>
</section>
