<script>
	import './index.scss';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { user } from '$lib/stores/auth';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	let loading = true;
	onMount(async () => {});
</script>

{#if loading}{:else}
	<div class="application pb-[80px]">
		<div class="container h-full mx-auto p-4 pb-0">
			<slot />
		</div>
	</div>
{/if}

<style lang="scss">
	.application {
		min-height: 100vh;
		position: relative;
		overflow-x: hidden;
	}
</style>
