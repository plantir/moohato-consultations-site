<script lang="ts">
	export let value: any;
	export let placeholder: string = '';
	export let items: any = [];
</script>

<div class=" input-wrapper {$$props.class}" on:click>
	<div class="input-icon">
		<slot />
	</div>
	<select bind:value class="input-app" {placeholder}>
		{#each items as item}
			<option value={item.value}>{item.text}</option>
		{/each}
	</select>
</div>

<style lang="scss">
	.input-wrapper {
		@apply relative w-full h-[56px] px-4 sm:px-8  rounded-full bg-[#F5F4F9] text-xs sm:text-sm font-medium flex items-center gap-2;
	}
	.input-app {
		@apply outline-none bg-transparent h-full w-full;
	}
	.input-icon {
	}
</style>
