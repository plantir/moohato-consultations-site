<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import Swiper from './Common/Swiper.svelte';
	import CustomerComment from './Customer/CustomerComment.svelte';
	import Voice from './Common/Voice.svelte';

	export let items: any = [1, 2, 3];
	let active_index = 0;
	let voices: any = [
		{
			src: './voices/voice-1.mp3'
		},
		{
			src: './voices/voice-2.mp3'
		},
		{
			src: './voices/voice-3.mp3'
		},
		{
			src: './voices/voice-4.mp3'
		},
		{
			src: './voices/voice-5.mp3'
		},
		{
			src: './voices/voice-6.mp3'
		}
	];
	let images: any = [
		{
			src: './images/image-1.jpg'
		},
		{
			src: './images/image-2.jpg'
		},
		{
			src: './images/image-3.jpg'
		},
		{
			src: './images/image-4.jpg'
		},
		{
			src: './images/image-5.jpg'
		},
		{
			src: './images/image-6.jpg'
		},
		{
			src: './images/image-7.jpg'
		},
		{
			src: './images/image-8.jpg'
		}
	];
</script>

<div class={$$props.class}>
	<div class="sm:px-32">
		<div class="text-primary text-xl sm:text-[40px] text-center font-medium mb-4">
			رضایت مشتریان
		</div>
		<div class="text-justify text-gray-400 text-sm sm:text-xl" style="text-align-last: center;">
			رضایتمندی مشتریان یک عنصر کانونی در مدیریت بازاریابی است. کوشش‌های مشتری محور سازمان در جهت
			ایجاد رضایت در مشتریان است. با این وحود رضایت مشتریان هدف نهایی همه فعالیت‌های بازاریابی نیست
		</div>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 items-center gap-10 sm:gap-[150px] mt-14 relative">
		<div class="">
			<Swiper pagination>
				{#each images as image}
					<swiper-slide>
						<div class="h-[200px] mb-10 mt-10 flex items-center justify-center">
							<img src={image.src} class="h-full w-auto" alt="" />
						</div>
					</swiper-slide>
				{/each}
			</Swiper>
		</div>
		<div class="hidden sm:block border-between" />
		<div class="">
			<Swiper pagination>
				{#each { length: voices.length / 3 } as item, voice_slider_index}
					<swiper-slide>
						<div class="customer-card">
							{#each { length: 3 } as item, index}
								{#if voices.length > index + voice_slider_index * 3}
									<Voice voice={voices[index + voice_slider_index * 3].src} />
								{/if}
							{/each}
						</div>
					</swiper-slide>
				{/each}
			</Swiper>
		</div>
	</div>
</div>

<style lang="scss">
	.customer-card {
		@apply flex-1 rounded-2xl relative bg-white my-10 sm:h-[210px] px-3 py-2.5 sm:px-[26px] sm:py-[20px] flex-col flex gap-2;
	}
	.stars {
		@apply flex -items-center gap-1;
	}
	.border-between {
		@apply absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 h-5/6 border-r border-primary opacity-50;
	}
</style>
