<script lang="ts">
	import { toasts } from '$lib/stores/toast';
	function close(toast: any) {
		toasts.update((toasts) => {
			return toasts.filter((t) => t.id != toast.id);
		});
	}
</script>

{#each $toasts as toast}
	<div class="toast toast-center hidden sm:block">
		<div
			class="alert"
			class:alert-info={toast.type == 'info'}
			class:alert-success={toast.type == 'success'}
			class:alert-error={toast.type == 'error'}
			class:alert-warning={toast.type == 'warning'}
			class:alert-primary={toast.type == 'primary'}
		>
			<span>{toast.text}</span>
			<i class="las la-times" on:click={() => close(toast)} />
		</div>
	</div>
	<div class="toast block sm:hidden">
		<div
			class="alert"
			class:alert-info={toast.type == 'info'}
			class:alert-success={toast.type == 'success'}
			class:alert-error={toast.type == 'error'}
			class:alert-warning={toast.type == 'warning'}
			class:alert-primary={toast.type == 'primary'}
		>
			<span>{toast.text}</span>
			<i class="las la-times" on:click={() => close(toast)} />
		</div>
	</div>
{/each}

<style lang="scss" global>
	.alert-container {
		@apply p-4 fixed flex flex-col gap-4 bottom-0 right-0 w-1/2 z-[1000];
		@media only screen and (max-width: 600px) {
			@apply w-full;
		}
	}
</style>
