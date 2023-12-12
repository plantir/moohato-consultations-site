<script>
	import AppToast from '@app/components/layout/AppToast.svelte';
	import './index.scss';
	import { onMount } from 'svelte';
	let loading = true;
	onMount(async () => {});
</script>

<div class="application">
	<div class="">
		<slot />
	</div>
	<div class="footer-app flex justify-between items-center py-5 flex-col-reverse lg:flex-row px-10">
		<div class="flex gap-x-2 mt-4">
			<a class="social" href="https://www.instagram.com/_moohato" target="_blank">
				<i class="lab la-instagram text-2xl" />
			</a>

			<a class="social" href="https://t.me/ahmadrezaa72">
				<i class="lab la-telegram text-2xl" />
			</a>
			<a class="social" href="https://wa.me/989122022750">
				<i class="lab la-whatsapp text-2xl" />
			</a>
		</div>
		<div class="text-center">
			<div class="flex justify-center">
				<a href="https://enamad.ir/">
					<img class="w-20 h-20 rounded-xl" src="/images/e-namad.png" alt="" />
				</a>
				<a href="https://www.fda.gov.ir//">
					<img class="w-20 h-20 mr-4 rounded-xl" src="/images/sib.jpg" alt="" />
				</a>
			</div>
			<div class="text-white text-lg font-medium mt-2">
				<span>آدرس: </span><span>تهرانسر ، بلوار شاهد نبش طالبی پلاک ۱۵۰</span>
			</div>
		</div>
	</div>
</div>

<AppToast />

<style lang="scss">
	.application {
		min-height: 100vh;
		position: relative;
		overflow-x: hidden;
	}
	.footer-app {
		@apply lg:px-[100px];
		background: linear-gradient(269deg, #0b5acc 7.91%, #ff837f 92.53%);
		.social {
			@apply w-10 h-10 rounded-full bg-white flex items-center justify-center;
		}
	}
</style>
