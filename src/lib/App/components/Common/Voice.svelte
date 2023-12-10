<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import WaveSurfer from 'wavesurfer.js';
	export let voice: any;
	export let playing = false;
	export let deactiveBg = 'bg-primary/50';
	export let activeBg = 'bg-primary';
	const dispatch = createEventDispatcher();
	let random = Math.round(Math.random() * 1000);
	let wavesurfer: any = {};
	let audio: any;
	let time: any;
	onMount(async () => {
		wavesurfer = await WaveSurfer.create({
			container: `#wave${random}`,
			waveColor: '#fff',
			progressColor: '#F6F6F6',
			height: 36,
			url: voice
		});
		wavesurfer.on('click', () => {
			wavesurfer.play();
		});
		wavesurfer.on('ready', (duration: any) => {
			const minute = Math.floor(duration / 60);
			const secound =
				Math.floor(duration % 60) < 10
					? `0${Math.floor(duration % 60)}`
					: Math.floor(duration % 60);

			time = `${minute}:${secound}`;
		});
		wavesurfer.on('play', () => {
			dispatch('pauseAll');
			playing = true;
		});

		wavesurfer.on('pause', () => {
			playing = false;
		});

		wavesurfer.on('finish', () => {
			playing = false;
		});
		wavesurfer.on('timeupdate', (currentTime: any) => {
			const minute = Math.floor(currentTime / 60);
			const secound =
				Math.floor(currentTime % 60) < 10
					? `0${Math.floor(currentTime % 60)}`
					: Math.floor(currentTime % 60);

			time = `${minute}:${secound}`;
		});
	});
	export function play() {
		if (playing) {
			wavesurfer.pause();
		} else {
			wavesurfer.play();
		}
	}
	export function pause() {
		if (playing) {
			wavesurfer.pause();
		}
	}
</script>

<div
	class="flex items-center gap-4 h-[50px] px-3.5 sm:px-5 rounded-lg {$$props.class} 
    {playing ? activeBg : deactiveBg}"
>
	<div class="text-white" style="direction: ltr;">{time}</div>
	<div class="flex-1 mx-2 sm:mx-8">
		<div id="wave{random}" />
	</div>
	<button class="w-8" on:click|stopPropagation={play}>
		{#if playing}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="28"
				viewBox="0 0 18 28"
				fill="none"
			>
				<path
					d="M1.23325 0.525146C0.906175 0.525146 0.592485 0.655024 0.361205 0.886177C0.129925 1.11733 0 1.43082 0 1.75772V26.7009C0 27.0278 0.129925 27.3413 0.361205 27.5725C0.592485 27.8036 0.906175 27.9335 1.23325 27.9335C1.56033 27.9335 1.874 27.8036 2.10528 27.5725C2.33656 27.3413 2.46651 27.0278 2.46651 26.7009V1.75772C2.46651 1.43082 2.33656 1.11733 2.10528 0.886177C1.874 0.655024 1.56033 0.525146 1.23325 0.525146Z"
					fill="white"
				/>
				<path
					d="M16.6483 0.525146C16.3212 0.525146 16.0075 0.655024 15.7762 0.886177C15.545 1.11733 15.415 1.43082 15.415 1.75772V26.7009C15.415 27.0278 15.545 27.3413 15.7762 27.5725C16.0075 27.8036 16.3212 27.9335 16.6483 27.9335C16.9754 27.9335 17.289 27.8036 17.5203 27.5725C17.7516 27.3413 17.8815 27.0278 17.8815 26.7009V1.75772C17.8815 1.43082 17.7516 1.11733 17.5203 0.886177C17.289 0.655024 16.9754 0.525146 16.6483 0.525146Z"
					fill="white"
				/>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="31"
				viewBox="0 0 28 31"
				fill="none"
			>
				<path
					d="M5.74868 30.2559C4.22433 30.2501 2.76424 29.6477 1.68718 28.5804C0.610115 27.513 0.00357925 26.0674 0 24.559V5.96495C9.97837e-05 4.9605 0.269044 3.974 0.779468 3.10577C1.28989 2.23753 2.02359 1.51854 2.90595 1.02191C3.78832 0.52528 4.78787 0.268717 5.80295 0.278337C6.81803 0.287958 7.8124 0.563412 8.68499 1.07667L24.598 10.4354C25.4571 10.9408 26.1681 11.659 26.6609 12.5193C27.1537 13.3795 27.4114 14.3521 27.4083 15.341C27.4052 16.3299 27.1416 17.3009 26.6434 18.1581C26.1453 19.0154 25.4298 19.7293 24.5676 20.2294L8.65941 29.4615C7.77833 29.9789 6.77322 30.2532 5.74868 30.2559ZM5.74868 2.65046C5.16721 2.65192 4.59617 2.80327 4.09181 3.08959C3.57531 3.376 3.14585 3.79417 2.84812 4.30057C2.55039 4.80696 2.39527 5.38307 2.39895 5.96891V24.563C2.39908 25.1465 2.55491 25.7196 2.85068 26.2243C3.14645 26.7291 3.57168 27.1477 4.08337 27.4377C4.59505 27.7277 5.17506 27.8788 5.76473 27.8759C6.3544 27.873 6.93283 27.716 7.44154 27.4209L23.3546 18.1888C23.8568 17.8974 24.2735 17.4814 24.5636 16.9819C24.8537 16.4825 25.0072 15.9168 25.0089 15.3407C25.0106 14.7646 24.8605 14.1981 24.5733 13.697C24.2861 13.1959 23.8719 12.7775 23.3714 12.4832L7.45833 3.12441C6.94222 2.81641 6.35138 2.65262 5.74868 2.65046Z"
					fill="white"
				/>
			</svg>
		{/if}
	</button>
</div>
