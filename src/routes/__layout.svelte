<script lang="ts">
	import '../app.css'
</script>

<slot />

<style lang="postcss">
	:global(body) {
		@apply px-6;
	}
</style>
