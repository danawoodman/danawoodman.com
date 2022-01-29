<script context="module" lang="ts">
  import type { LoadOutput } from "@sveltejs/kit";
  import { getPosts } from "./_posts";

  export async function load(): Promise<LoadOutput> {
    const posts = await getPosts();
    return { props: { posts } };
  }
</script>

<script lang="ts">
  export let posts = [];
</script>

<h2>Posts</h2>
<nav>
  {#each posts as post}
    <article>
      <h2><a href={"/" + post.slug}>{post.title}</a></h2>
    </article>
  {/each}
</nav>
