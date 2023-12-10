<script lang="ts">
	import { persianToEnglish } from '$lib/helpers/persianNumber';
	import { HomeService } from '$lib/services';
	import Button from './Common/Button.svelte';
	import Input from './Common/Input.svelte';
	import DoubleCheckSvgStroke from './Svg/DoubleCheckSvgStroke.svelte';
	import IncomingCallSvgStroke from './Svg/IncomingCallSvgStroke.svelte';
	import UserOutlineSvgStroke from './Svg/UserOutlineSvgStroke.svelte';
	let form: any = {};
	let message: any = null;
	let loading_btn = false;
	const sendForm = async () => {
		loading_btn = true;
		if (form.name && form.mobile) {
			try {
				let data = {
					name: form.name,
					mobile: persianToEnglish(form.mobile),
					category: 'sexual'
				};
				const res = await HomeService.sendForm(data);
				message = {
					type: 'success',
					message: 'درخواست شما با موفقیت ثبت شد'
				};
				setTimeout(() => {
					message = null;
				}, 5000);
			} catch (error) {
				message = {
					type: 'error',
					message: 'مشکلی پیش آمده لطفا اطلاعات خود را چک کنید و دوباره امتحان کنید'
				};
			}
		} else {
			message = {
				type: 'error',
				message: 'لطفا تمامی موارد را کامل کنید'
			};
		}
		loading_btn = false;
		setTimeout(() => {
			message = null;
		}, 5000);
	};
</script>

<div class="relative sm:px-20">
	<div class="shadow-box" />
	<div class="profile-box {$$props.class}">
		<div class="hidden sm:block pr-12">
			<img src="./images/profile-section2.png" alt="" />
		</div>
		<div>
			<div class="pr-8 border-b border-gray-200 pb-0.5">
				<div
					class="flex items-center gap-2 text-xl font-medium tracking-tight text-secondary -mr-8"
				>
					<DoubleCheckSvgStroke class="stroke-secondary" />
					مشاوره رایگان
				</div>
				<div class="text-sm text-gray-500 mb-1.5 -mt-1">اطلاعات خود را جهت مشاوره تکمیل کنید</div>
				<div class="text-xs text-gray-400">در وارد کردن اطلاعات خود دقت نمیایید</div>
			</div>
			<div class="flex flex-col gap-4 pt-4">
				{#if message}
					<div class={message.type == 'error' ? 'text-error' : 'text-success'}>
						{message.message}
					</div>
				{/if}
				<Input bind:value={form.name} placeholder="نام و نام خانوادگی">
					<UserOutlineSvgStroke class="stroke-black" />
				</Input>
				<Input bind:value={form.mobile} placeholder="شماره تماس">
					<IncomingCallSvgStroke class="stroke-black" />
				</Input>
				<Button type="secondary" on:click={sendForm} loading={loading_btn}>ارسال</Button>
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
