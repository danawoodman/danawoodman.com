<script lang="ts">
	let filename: string;
	let ratio: string = "16:9";
	let origWidth: number = 1200;
	let origHeight: number = 900;
	let width: number;
	let height: number;

	function handleChangeWidth(e): void {
		console.log(e);
	}
</script>

<form action="" class="mx-auto max-w-screen-md my-12">
	<input
		type="text"
		name="filename"
		bind:value={filename}
		placeholder="File name..."
	/>
	<input
		type="text"
		name="ratio"
		bind:value={ratio}
		pattern={`[0-9\.]*:[0-9\.]*`}
		placeholder="Aspect ratio..."
		title="Two numbers separate by a colon (:)"
	/>
	<input
		type="number"
		name="width"
		bind:value={width}
		placeholder="Width..."
		on:change={handleChangeWidth}
	/>
	<input
		type="number"
		name="height"
		bind:value={height}
		placeholder="Height..."
	/>
</form>

<pre>{JSON.stringify(
		{
			filename,
			ratio,
			width,
			height,
		},
		null,
		2
	)}</pre>
