<script lang="ts">
	import Button from './Common/Button.svelte';
	import Input from './Common/Input.svelte';
	let form: any = {};
</script>

<div class="relative sm:px-20">
	<div class="shadow-box" />
	<div class="profile-box {$$props.class}">
		<div class="hidden sm:block pr-12">
			<img src="/images/profile-section2.png" alt="" />
		</div>
		<div>
			<div class="pr-8 border-b border-gray-200 pb-0.5">
				<div
					class="flex items-center gap-2 text-xl font-medium tracking-tight text-secondary -mr-8"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="21"
						height="21"
						viewBox="0 0 21 21"
						class="stroke-secondary"
						fill="none"
					>
						<path
							d="M2.58154 12.6499L5.68524 15.7536M10.0304 10.7877L13.1341 7.68396M7.54745 12.6499L10.6511 15.7536L18.1 7.68396"
							stroke-width="1.72727"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					مشاوره رایگان
				</div>
				<div class="text-sm text-gray-500 mb-1.5 -mt-1">اطلاعات خود را جهت مشاوره تکمیل کنید</div>
				<div class="text-xs text-gray-400">در وارد کردن اطلاعات خود دقت نمیایید</div>
			</div>
			<div class="flex flex-col gap-4 pt-4">
				<Input bind:value={form.name} placeholder="نام و نام خانوادگی">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="18"
						viewBox="0 0 14 18"
						fill="none"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M6.94171 11.7307C3.60149 11.7307 0.749023 12.2357 0.749023 14.2583C0.749023 16.2808 3.5834 16.804 6.94171 16.804C10.2819 16.804 13.1336 16.2981 13.1336 14.2764C13.1336 12.2547 10.3 11.7307 6.94171 11.7307Z"
							stroke="#130F26"
							stroke-width="1.29545"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M6.94163 8.84595C9.13362 8.84595 10.9102 7.0685 10.9102 4.87651C10.9102 2.68452 9.13362 0.907898 6.94163 0.907898C4.74964 0.907898 2.97219 2.68452 2.97219 4.87651C2.96479 7.0611 4.7299 8.83855 6.91366 8.84595H6.94163Z"
							stroke="#130F26"
							stroke-width="1.23377"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Input>
				<Input bind:value={form.mobile} placeholder="شماره تماس">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="19"
						viewBox="0 0 19 19"
						fill="none"
					>
						<path
							d="M11.9868 1.59094C15.1831 1.9459 17.7084 4.46772 18.0668 7.66403"
							stroke="#130F26"
							stroke-width="1.29545"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M11.9868 4.65082C13.5163 4.94791 14.7116 6.14405 15.0095 7.67355"
							stroke="#130F26"
							stroke-width="1.29545"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M9.11831 10.2035C12.5633 13.6476 13.3449 9.66311 15.5383 11.8551C17.653 13.9692 18.8693 14.3928 16.1892 17.0714C15.8536 17.3411 13.7213 20.586 6.22767 13.0943C-1.26686 5.60167 1.97608 3.46714 2.24586 3.13163C4.93161 0.445627 5.3488 1.66814 7.46347 3.78227C9.65602 5.97519 5.67328 6.7593 9.11831 10.2035Z"
							stroke="#130F26"
							stroke-width="1.29545"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Input>
				<Button class="!bg-secondary">ارسال</Button>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.profile-box {
		@apply bg-white p-4 sm:p-9 rounded-[30px] sm:rounded-[58px] grid sm:grid-cols-2 gap-16 relative;

		> div {
			position: relative;
		}
	}
	.shadow-box {
		border-radius: 58.727px;
		background: rgba(211, 211, 225, 0.7);
		filter: blur(14px);
		bottom: -10px;
		right: 3%;
		width: 94%;
		height: calc(100% + 10px);
		@media (min-width: 640px) {
			bottom: -30px;
			height: 70%;
		}
		@apply absolute;
	}
</style>
