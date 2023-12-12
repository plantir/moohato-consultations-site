<script lang="ts">
	import { goto } from '$app/navigation';
	import Customers from '@app/components/Customers.svelte';
	import CustomersSection from '@app/components/CustomersSection.svelte';
	import Header from '@app/components/Header/Header.svelte';
	import Packages from '@app/components/Packages.svelte';
	import PackagesSection from '@app/components/PackagesSection.svelte';
	import ProfileBox from '@app/components/ProfileBox.svelte';
	import ProfileBoxSection from '@app/components/ProfileBoxSection.svelte';
	import SectionBg from '@app/components/SectionBg.svelte';
	export let data: any;
	const gotoId = (id: string) => {
		const anchor: any = document.getElementById(id);
		const { top } = anchor.getBoundingClientRect();
		window.scrollTo({
			top: window.scrollY + top - 100,
			behavior: 'smooth'
		});
	};
</script>

<Header on:gotoPackage={() => gotoId('hairPackages')} on:gotoForm={() => gotoId('form')} />
<div class="container" id="form">
	<ProfileBox class="mt-10 sm:-mt-[120px]" />
</div>
<div class="bg-[#EEEEF8B2] pt-10 pb-[70px] mt-[140px] relative">
	<div class="hidden sm:block absolute -z-10 -top-[330px] left-[88px]">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="136"
			height="124"
			viewBox="0 0 136 124"
			fill="none"
		>
			<path
				d="M39.0891 0.62358L106.499 6.69562L135.151 68.0148L96.4164 123.228L29.0306 117.121L0.35487 55.8366L39.0891 0.62358Z"
				fill="#0E71FF"
				fill-opacity="0.28"
			/>
		</svg>
	</div>
	<div class="hidden sm:block absolute -z-10 -top-[230px] left-0">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="112"
			height="124"
			viewBox="0 0 112 124"
			fill="none"
		>
			<path
				d="M15.0891 0.62358L82.499 6.69562L111.151 68.0148L72.4164 123.228L5.03057 117.121L-23.6451 55.8366L15.0891 0.62358Z"
				fill="#0E71FF"
				fill-opacity="0.3"
			/>
		</svg>
	</div>
	<div class="hidden sm:block absolute -z-10 -top-[180px] right-0">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="173"
			height="255"
			viewBox="0 0 173 255"
			fill="none"
		>
			<path
				d="M3.66615 131.007L72.1953 6.75357L214.057 3.50022L287.344 124.426L218.769 248.604L76.953 251.933L3.66615 131.007Z"
				stroke="#3C80E2"
				stroke-width="5"
				stroke-miterlimit="10"
			/>
		</svg>
	</div>
	<div class="container">
		<Customers class="" />
	</div>
</div>
<div class="relative">
	<div class="hidden sm:block absolute -z-10 top-[110px] left-[40px]">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="222"
			height="202"
			viewBox="0 0 222 202"
			fill="none"
		>
			<path
				d="M64.3427 0.338936L174.983 10.3051L222.01 110.949L158.435 201.571L47.8334 191.548L0.767622 90.9607L64.3427 0.338936Z"
				fill="#0E71FF"
				fill-opacity="0.4"
			/>
		</svg>
	</div>
	<div class="hidden sm:block absolute -z-10 bottom-[40px] left-[40px]">
		<svg
			width="438"
			height="450"
			viewBox="0 0 438 450"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M61.8192 227.363L124.33 186.055L191.471 219.313L196.098 293.833L133.584 335.094L66.4463 301.883L61.8192 227.363Z"
				stroke="url(#paint0_linear_72_656)"
				stroke-width="5"
				stroke-miterlimit="10"
			/>
			<path
				d="M129.936 96.9133L192.447 55.6052L259.588 88.863L264.215 163.383L201.701 204.644L134.563 171.433L129.936 96.9133Z"
				stroke="url(#paint1_linear_72_656)"
				stroke-width="5"
				stroke-miterlimit="10"
			/>
			<path
				d="M208.101 219.184L270.612 177.876L337.753 211.134L342.381 285.653L279.867 326.915L212.729 293.704L208.101 219.184Z"
				stroke="url(#paint2_linear_72_656)"
				stroke-width="5"
				stroke-miterlimit="10"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_72_656"
					x1="193.783"
					y1="256.55"
					x2="64.1313"
					y2="264.6"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#6BE1AD" />
					<stop offset="1" stop-color="#3BCFC6" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_72_656"
					x1="261.9"
					y1="126.1"
					x2="132.248"
					y2="134.15"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#6BE1AD" />
					<stop offset="1" stop-color="#3BCFC6" />
				</linearGradient>
				<linearGradient
					id="paint2_linear_72_656"
					x1="340.066"
					y1="248.37"
					x2="210.414"
					y2="256.421"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#6BE1AD" />
					<stop offset="1" stop-color="#3BCFC6" />
				</linearGradient>
			</defs>
		</svg>
	</div>
	<div class="container pb-10 sm:pb-[210px]" id="hairPackages">
		<Packages class="mt-10 sm:mt-[180px]" items={data.hair_packages} />
	</div>
</div>
<!-- <div class="relative">
	<SectionBg />
	<div class="container absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2">
		<div class="relative flex flex-col sm:flex-row sm:gap-16 sm:pb-[70px]">
			<div class="image-wrapper basis-[125px] sm:basis-[320px] flex-grow-0 flex-shrink-0">
				<img src="./images/section-2.png" class="w-[125px] sm:w-[320px]" alt="" />
			</div>
			<div class="text-white self-end sm:mb-16">
				<div class="text-xl sm:text-2xl tracking-tight mb-3">
					درمان مشکلات جنسی ( زود انزالی ، عدم نعوظ ، افزایش سایز )
				</div>
				<div class="text-sm text-white text-justify mb-4 sm:mb-[70px]">
					متاسفانه در ایران به دلیل عدم آگاهی کامل جنسی و وجود درمان های شیمیایی و خطرناک برای درمان
					مسائل جنسی اکثر آقایان اقدامی برای درمان نمیکنند . در مجموعه ی ما با دریافت مشاوره از
					متخصصین و محصولات کاملا گیاهی مشکلات جنسی خود را دائمی درمان کنید
				</div>
				<div class="flex items-center gap-3 justify-end">
					<button
						class="border border-white text-white h-12 rounded-full text-xs sm:text-sm px-6"
						on:click={() => gotoId('sexualPackages')}>مشاهده پکیج</button
					>
					<button
						class="bg-white text-[#FF685E] h-12 rounded-full text-xs sm:text-sm px-6"
						on:click={() => gotoId('section2')}>دریافت نوبت مشاوره</button
					>
				</div>
			</div>
		</div>
	</div>
</div> -->
<!-- <div class="container" id="section2">
	<ProfileBoxSection class="mt-10 sm:-mt-[120px]" />
</div> -->
<!-- <div class="bg-[#F8EEEEB2] pt-10 pb-[70px] mt-[140px]">
	<div class="container">
		<CustomersSection />
	</div>
</div> -->
<!-- <div class="relative">
	<div class="hidden sm:block absolute -z-10 top-[20px] right-[0px]">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="114"
			height="124"
			viewBox="0 0 114 124"
			fill="none"
		>
			<path
				d="M39.0891 0.623458L106.499 6.69549L135.151 68.0147L96.4164 123.228L29.0306 117.121L0.35487 55.8364L39.0891 0.623458Z"
				fill="#FF480E"
				fill-opacity="0.28"
			/>
		</svg>
	</div>
	<div class="hidden sm:block absolute -z-10 top-[165px] right-[0px]">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="148"
			height="202"
			viewBox="0 0 148 202"
			fill="none"
		>
			<path
				d="M64.0126 0.502266L174.653 10.4684L221.68 111.112L158.105 201.734L47.5034 191.712L0.437544 91.1241L64.0126 0.502266Z"
				fill="#FF2B0E"
				fill-opacity="0.4"
			/>
		</svg>
	</div>
	<div class="hidden sm:block absolute -z-10 top-[85px] right-[95px]">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="136"
			height="124"
			viewBox="0 0 136 124"
			fill="none"
		>
			<path
				d="M39.0891 0.623458L106.499 6.69549L135.151 68.0147L96.4164 123.228L29.0306 117.121L0.35487 55.8364L39.0891 0.623458Z"
				fill="#FF390E"
				fill-opacity="0.3"
			/>
		</svg>
	</div>
	<div class="container mb-10 sm:mb-[210px]" id="sexualPackages">
		<PackagesSection class="mt-10 sm:mt-[180px]" items={data.sexual_packages} />
	</div>
</div> -->
