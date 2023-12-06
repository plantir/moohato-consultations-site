<script lang="ts">
	import Input from './Input.svelte';
	export let value: any;
	export let placeholder: string;
	let file_element: any;
	const openFile = () => {
		file_element.click();
	};
	const updateImage = (e: any) => {
		console.log(e.target.files[0]);
	};
</script>

<input type="file" class="hidden" bind:this={file_element} on:change={updateImage} />
<Input bind:value {placeholder} on:click={openFile}>
	<slot />
</Input>
