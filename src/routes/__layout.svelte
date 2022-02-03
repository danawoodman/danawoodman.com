<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";
</script>

<Nav />

<main>
  <!-- <h1 class="text-3xl">{$page.stuff?.title}</h1> -->
  <slot />
</main>

<Footer />

<!-- <style lang="postcss">
  @media (prefers-color-scheme: dark) {
    body {
      background: black;
    }
  }
</style> -->
