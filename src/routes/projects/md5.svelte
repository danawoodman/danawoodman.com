<script lang="ts">
	import md5 from "md5";
	import copy from "copy-to-clipboard";

	let input = "hello world";
	$: output = md5(input);
</script>

<main class="max-w-prose mx-auto my-10 px-6">
	<header class="mb-10">
		<h1 class="text-4xl mb-3 font-extrabold">MD5 Hash Encoder</h1>
		<p>Create an MD5 hash of a string.</p>
	</header>

	<textarea
		type="text"
		bind:value={input}
		class="text-lg p-6 bg-gray-100 w-full block rounded-md"
		rows="6"
		placeholder="Paste what you want to MD5 encode here..."
	/>

	{#if input}
		<div class="flex items-center mt-10 p-6 bg-yellow-100 rounded-md">
			<pre class="flex-1 text-xl bg-transparent">{output}</pre>
			<button on:click={() => copy(output)} class="hover:text-teal-600">
				<svg
					aria-hidden="true"
					focusable="false"
					class="ml-4"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					width="24"
					height="24"
					><path
						fill="currentColor"
						d="M272 416C263.2 416 256 423.2 256 432V448c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V192c0-17.67 14.33-32 32-32h112C184.8 160 192 152.8 192 144C192 135.2 184.8 128 176 128H63.99c-35.35 0-64 28.65-64 64l.0098 256C0 483.3 28.65 512 64 512h160c35.35 0 64-28.65 64-64v-16C288 423.2 280.8 416 272 416zM502.6 86.63l-77.25-77.25C419.4 3.371 411.2 0 402.7 0H288C252.7 0 224 28.65 224 64v256c0 35.35 28.65 64 64 64h160c35.35 0 64-28.65 64-64V109.3C512 100.8 508.6 92.63 502.6 86.63zM416 45.25L466.7 96H416V45.25zM480 320c0 17.67-14.33 32-32 32h-160c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h96l.0026 64c0 17.67 14.33 32 32 32H480V320z"
					/></svg
				>
			</button>
		</div>
	{/if}
</main>
