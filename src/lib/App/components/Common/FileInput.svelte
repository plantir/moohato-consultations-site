<script lang="ts">
	import Input from './Input.svelte';
	export let value: any;
	export let placeholder: string;
	let file_element: any;
	const openFile = () => {
		file_element.click();
	};
	const updateImage = (e: any) => {
		value = e.target.files[0];
	};
</script>

<input type="file" class="hidden" bind:this={file_element} on:change={updateImage} />
<Input value={value?.name} {placeholder} on:click={openFile}>
	<slot />
</Input>
