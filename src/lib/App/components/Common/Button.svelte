<script lang="ts">
	export let loading = false;
	export let type: 'primary' | 'secondary' = 'primary';
</script>

<button class="app-button {$$props.class} {type}" on:click disabled={loading}>
	<slot />
</button>

<style lang="scss">
	.app-button {
		@apply px-8 h-[56px] rounded-full  text-white text-sm;
		&.primary {
			@apply bg-primary disabled:bg-primary/60;
		}
		&.secondary {
			@apply bg-secondary disabled:bg-secondary/60;
		}
	}
</style>
