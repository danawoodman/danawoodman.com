<script lang="ts">
	export let categories = [];
</script>

{#if categories?.length}
	<nav class="flex items-center text-sm">
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
