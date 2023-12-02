<script lang="ts">
	export let value: any;
	export let placeholder: string = '';
</script>

<div class=" input-wrapper {$$props.class}">
	<div class="input-icon">
		<slot />
	</div>
	<input type="text" bind:value class="input-app" {placeholder} />
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
