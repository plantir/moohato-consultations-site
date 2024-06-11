<script lang="ts">
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';
	import ProfileBox from '../ProfileBox.svelte';
	const dispatch = createEventDispatcher();
	const gotoPackage = () => {
		dispatch('gotoPackage');
	};
	const gotoForm = () => {
		dispatch('gotoForm');
	};
</script>

<div class="header">
	<img src="./images/background.png" class="w-full hidden sm:block custom-image" alt="" />
	<img src="./images/background-mobile.png" class="w-full sm:hidden custom-image" alt="" />
	<div class="container pt-10">
		<div class="relative flex flex-col sm:flex-row sm:gap-5 sm:pt-[70px]">
			<div class="image-wrapper">
				<img src="./images/product.jpg" alt="" />
			</div>
			<div class="text-white sm:mb-16">
				<div class="text-lg sm:text-2xl tracking-tight mb-3">سرم سیر سیاه ساخت کشور فرانسه</div>
				<ul class="text-sm text-white text-justify mb-4 properties">
					<li>قطع ریزش مو</li>
					<li>افزایش ضخامت مو</li>
					<li>تقویت و رویش مجدد</li>
				</ul>
				<a
					class="flex items-center justify-center sm:justify-start my-4 gap-2 relative"
					href="https://www.instagram.com/Moohato_"
					target="_blank"
				>
					<div class="click-right rotate-90 scale-y-[-1]">
						<img src="./images/click.png" class="w-8" alt="" />
					</div>
					<img src="./images/instagram.png" class="w-8" alt="" />
					Moohato_
					<div class="click-left rotate-90">
						<img src="./images/click.png" class="w-8" alt="" />
					</div>
				</a>
				<div class="flex items-center justify-center sm:justify-start">
					<button
						class="border border-white text-white h-12 w-[170px] rounded-full text-xs sm:text-sm bg-primary"
						on:click={gotoPackage}>مشاهده رضایت</button
					>
				</div>
			</div>
		</div>
		<ProfileBox class="mt-8" />
	</div>
</div>

<style lang="scss">
	.text-animation {
		animation: custom infinite 3s;
		font-weight: bold;
		@apply mb-5;
	}
	.properties {
		list-style-type: disc;
		@apply mr-4;
	}
	.custom-image {
		@apply absolute top-0 right-0 w-full;
	}
	.header {
		@apply relative;
		.image-wrapper {
			@apply relative h-[116px] w-[116px] rounded-[40px] bg-white overflow-hidden mb-3 p-3 bg-white;
			@media (min-width: 640px) {
				@apply pb-[25%] h-0 rounded-[70px] overflow-visible;
				flex: 0 0 25%;
			}
			img {
				@apply absolute top-0 right-0 w-full;
				@media screen and (min-width: 640px) {
					@apply bottom-0 rounded-2xl;
					top: unset;
				}
			}
		}
	}
	@keyframes custom {
		0% {
			color: #fff;
			// font-size: 16px;
		}
		50% {
			color: #000;
			// font-size: 18px;
		}
		100% {
			color: #fff;
			// font-size: 16px;
		}
	}
</style>
