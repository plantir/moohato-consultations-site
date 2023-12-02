<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import Swiper from './Common/Swiper.svelte';
	import CustomerComment from './Customer/CustomerComment.svelte';
	import Voice from './Common/Voice.svelte';

	export let items: any = [1, 2, 3];
	let active_index = 0;
	let voices: any = [
		{
			src: '/voices/voice.mp3'
		},
		{
			src: '/voices/voice.mp3'
		},
		{
			src: '/voices/voice.mp3'
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
				<swiper-slide>
					<CustomerComment />
				</swiper-slide>
				<swiper-slide>
					<CustomerComment />
				</swiper-slide>
				<swiper-slide>
					<CustomerComment />
				</swiper-slide>
			</Swiper>
		</div>
		<div class="hidden sm:block border-between" />
		<div class="">
			<Swiper pagination>
				<swiper-slide>
					<div class="customer-card">
						{#each voices as voice}
							<Voice voice={voice.src} />
						{/each}
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="customer-card">
						{#each voices as voice}
							<Voice voice={voice.src} />
						{/each}
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="customer-card">
						{#each voices as voice}
							<Voice voice={voice.src} />
							<!-- <audio controls class="w-full"> <source src={voice.src} type="" /></audio> -->
						{/each}
					</div>
				</swiper-slide>
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
