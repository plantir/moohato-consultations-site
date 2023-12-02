<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import type { NavigationOptions, PaginationOptions, AutoplayOptions } from 'swiper/types';
	// register Swiper custom elements
	export let swiper: any = null;
	export let navigation: boolean | NavigationOptions = false;
	export let pagination: boolean | PaginationOptions = false;
	export let virtual: boolean = false;
	export let slides_per_view: number | string = 1;
	export let autoplay: boolean | AutoplayOptions = false;
	export let loop: boolean = false;
	export let centeredSlides: boolean = false;
	export let effect = '';
	onMount(() => {
		register();

		// swiper.slidesPerView = 3;
	});
	const random = Math.random() * 10000;
</script>

<div class="relative {$$props.class}">
	<!-- <Swiper
      id="swiper-{random}"
      modules={[
        A11y,
        Autoplay,
        Controller,
        EffectCards,
        EffectCoverflow,
        EffectCreative,
        EffectCube,
        EffectFade,
        EffectFlip,
        FreeMode,
        Grid,
        HashNavigation,
        History,
        Keyboard,
        Lazy,
        Manipulation,
        Mousewheel,
        Navigation,
        Pagination,
        Parallax,
        Scrollbar,
        Thumbs,
        Virtual,
        Zoom,
      ]}
      on:swiper
      {...$$restProps}
    > -->
	<swiper-container
		bind:this={swiper}
		centered-slides={centeredSlides}
		center-insufficient-slides={centeredSlides}
		{effect}
		{pagination}
		{navigation}
		{virtual}
		{autoplay}
		{loop}
		slides-per-view={slides_per_view}
	>
		<slot />
	</swiper-container>
	<!-- </Swiper> -->
</div>
