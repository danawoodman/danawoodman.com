<script lang="ts">
  import Avatar from "$lib/components/Avatar.svelte";

  import Footer from "$lib/components/Footer.svelte";
  // import Nav from "$lib/components/Nav.svelte";
  import "../app.css";
</script>

<div>
  <div class="bg-white mb-12">
    <header class="max-w-prose mx-auto py-6">
      <div class="flex-shrink-0 flex items-center">
        <a href="/">
          <Avatar size={40} />
        </a>
        <a href="/">
          <h1 class="ml-4 font-bold">Dana Woodman</h1>
        </a>
      </div>
    </header>
  </div>
  <!-- <Nav /> -->

  <main>
    <!-- <h1 class="text-3xl">{$page.stuff?.title}</h1> -->
    <slot />
  </main>

  <Footer />

<style lang="postcss">
  :global(body) {
    @apply bg-slate-50 px-6;
  }
  /* @media (prefers-color-scheme: dark) {
    body {
      background: black;
    }
  } */
</style>
