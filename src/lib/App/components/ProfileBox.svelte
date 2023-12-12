<script lang="ts">
	import { persianToEnglish } from '$lib/helpers/persianNumber';
	import { HomeService } from '$lib/services';
	import Button from './Common/Button.svelte';
	import FileInput from './Common/FileInput.svelte';
	import Input from './Common/Input.svelte';
	import DoubleCheckSvgStroke from './Svg/DoubleCheckSvgStroke.svelte';
	import FileSvgStroke from './Svg/FileSvgStroke.svelte';
	import IncomingCallSvgStroke from './Svg/IncomingCallSvgStroke.svelte';
	import UploadSvgStroke from './Svg/UploadSvgStroke.svelte';
	import UserOutlineSvgStroke from './Svg/UserOutlineSvgStroke.svelte';
	import Loading from './loading.svelte';
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
					category: 'hair',
					image: form.image
				};
				const res = await HomeService.sendForm(data);
				message = {
					type: 'success',
					message: 'درخواست شما با موفقیت ثبت شد'
				};
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

<div class="relative sm:mx-auto max-w-lg">
	<div class="shadow-box" />
	<div class="profile-box {$$props.class}">
		<div class=" lg:pr-12">
			<div class="bg-[#0B5ACC21] pb-4 flex flex-col gap-3 rounded-[45px]">
				<div class="h-[200px] w-full bg-gray-400 rounded-[45px] flex justify-center items-center">
					<img src="./images/form-image.jpg" class=" h-full max-h-full" alt="" />
				</div>
				<div class="flex mt-2 flex-col items-center justify-center">
					<div class=" text-gray-900">نمونه ارسال عکس</div>
				</div>
			</div>
		</div>
		<div>
			<div class="pr-8 border-b border-gray-200 pb-0.5">
				<div class="flex items-center gap-2 text-xl font-medium tracking-tight text-primary -mr-8">
					<DoubleCheckSvgStroke class="stroke-[#130F26]" />
					مشاوره رایگان
				</div>
				<div class="text-sm text-gray-500 mb-1.5 -mt-1">اطلاعات خود را جهت مشاوره تکمیل کنید</div>
				<div class="text-xs text-gray-400">در وارد کردن اطلاعات خود دقت نمیایید</div>
			</div>
			<div class="flex flex-col gap-4 pt-4 relative">
				{#if message}
					<div class={message.type == 'error' ? 'text-error' : 'text-success'}>
						{message.message}
					</div>
				{/if}
				<Input bind:value={form.mobile} placeholder="شماره تماس">
					<IncomingCallSvgStroke class="stroke-[#130F26]" />
				</Input>
				<Input bind:value={form.name} placeholder="نام و نام خانوادگی">
					<UserOutlineSvgStroke class="stroke-[#130F26]" />
				</Input>
				<Input bind:value={form.age} placeholder="سن">
					<UserOutlineSvgStroke class="stroke-[#130F26]" />
				</Input>
				<div class="flex items-center justify-between gap-3">
					<FileInput bind:value={form.image} placeholder="آپلود عکس از کف سر">
						<div class="bg-primary/20 w-10 h-10 rounded-2xl flex items-center justify-center">
							<UploadSvgStroke class="stroke-primary" />
						</div>
					</FileInput>
				</div>
				<div>
					<Button class="flex-1 h-6" on:click={sendForm} loading={loading_btn}>ارسال</Button>
				</div>
			</div>
		</div>
	</div>
	{#if loading_btn}
		<div class="absolute top-0 right-0 bg-black/10 w-full h-full rounded-[30px] sm:rounded-[58px]">
			<Loading />
		</div>
	{/if}
</div>

<style lang="scss">
	.profile-box {
		@apply bg-white p-4 sm:p-9 rounded-[30px] sm:rounded-[58px] grid md:grid-cols-2 gap-16 relative;

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
