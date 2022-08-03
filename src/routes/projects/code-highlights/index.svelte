<script lang="ts">
	import { highlight, languages } from "prismjs";

	let code = 'console.log("Hello World");';
	let language = "js";

	const default_language = "js";
</script>

<main class="">
	<section class="px-32 py-48 bg-slate-100">
		<div
			class="bg-slate-800 rounded-lg shadow-lg shadow-slate-400 max-w-prose mx-auto"
		>
			<div class="px-3 py-2">
				<span class="inline-block w-3 h-3 bg-green-500 rounded-full" />
				<span class="inline-block w-3 h-3 bg-yellow-500 rounded-full ml-2" />
				<span class="inline-block w-3 h-3 bg-red-500 rounded-full ml-2" />
			</div>
			<pre class={`${"language-" + language}`}><code
					class={`${"langauge-" + language} block px-6 pb-4`}
					>{@html highlight(code, languages[language], default_language)}</code
				></pre>
		</div>
	</section>

	<section class="max-w-lg mx-auto mt-20">
		<header class="mb-8">
			<h1 class="text-2xl font-bold mb-4">Syntax Highlighter</h1>
			<p class="text-lg text-slate-600">
				Paste your code in the textarea below and select the language to use.
			</p>
		</header>
		<fieldset>
			<select
				name="language"
				bind:value={language}
				class="rounded-md border border-slate-200 active:border-indigo-500 focus:border-indigo-500"
			>
				{#each Object.keys(languages) as lang}
					<option value={lang}>{lang}</option>
				{/each}
			</select>
		</fieldset>

		<fielset class="block mt-6">
			<textarea
				bind:value={code}
				rows={8}
				class="w-full rounded-md border border-slate-200 active:border-indigo-500 focus:border-indigo-500"
			/>
		</fielset>
	</section>
</main>
