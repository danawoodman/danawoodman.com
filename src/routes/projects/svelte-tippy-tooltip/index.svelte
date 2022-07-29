<script>
	import tooltip from "./tooltip";
	import "tippy.js/themes/light.css";
	import "tippy.js/themes/light-border.css";
</script>

<main class="mx-auto my-12 max-w-prose px-8">
	<header class="prose mb-20">
		<h1 class="text-6xl font-extrabold">Svelte + Tippy.js tooltip action</h1>
		<div class="text-slate-700">
			<p class="text-xl text-slate-800">
				A Svelte action that adds tooltips via <a
					href="https://atomiks.github.io/tippyjs/"
					target="_blank"
				>
					Tippy.js
				</a>.
			</p>
			<p>
				Supports both <code>title="..."</code> and
				<code>aria-label="..."</code> for setting the tooltip content. Accepts the
				full configuration object Tippy.js supports for more advanced usage.
			</p>
			<p>
				View the source:
				<a
					href="https://github.com/danawoodman/danawoodman.com/blob/main/src/routes/projects/svelte-tippy-tooltip/tooltip.ts"
					target="_blank"
					class="ml-2"
				>
					Action
				</a>
				<a
					href="https://github.com/danawoodman/danawoodman.com/blob/main/src/routes/projects/svelte-tippy-tooltip/index.svelte"
					target="_blank"
					class="ml-2"
				>
					Usage
				</a>
			</p>
		</div>
	</header>
	<ul>
		<li>
			<button use:tooltip title="Title text!">With "title"</button>
		</li>
		<li>
			<button use:tooltip aria-label="Aria label!">With "aria-label"</button>
		</li>
		<li>
			<button use:tooltip={{ content: "Custom content!" }}
				>Custom content</button
			>
		</li>
		<li>
			<button use:tooltip={{ theme: "light" }} title="This is a light tooltip!"
				>Light theme</button
			>
		</li>
		<li>
			<button
				use:tooltip={{ theme: "light-border" }}
				title="This is a light bordered tooltip!">Light border theme</button
			>
		</li>
	</ul>
</main>

<style>
	:global(body) {
		@apply bg-slate-50;
	}

	li {
		@apply my-8;
	}

	button {
		@apply border-0 rounded-md;
		@apply bg-teal-500 hover:bg-indigo-600 text-white transition-colors duration-300;
		@apply inline-block px-6 py-3;
	}
	button:hover,
	button:active {
		background: BlueViolet;
	}
</style>
