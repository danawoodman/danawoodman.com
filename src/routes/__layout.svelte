<script>
  import "../app.css";
</script>

<header class="mb-12 text-center">
  <h1>SvelteHelp</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/">How Tos</a>
    <a href="/">References</a>
    <a href="/">Resources</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer class="text-center my-12">
  <nav><a href="/sitemap.xml">Sitemap</a></nav>
</footer>
