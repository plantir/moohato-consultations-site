<script lang="ts">
</script>

<div class="header">
	<img src="/images/background.png" class="w-full hidden sm:block" alt="" />
	<img src="/images/background-mobile.png" class="w-full sm:hidden" alt="" />
	<div class="container absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2">
		<div class="relative flex flex-col sm:flex-row sm:gap-5 sm:pt-[70px]">
			<div class="image-wrapper">
				<img src="/images/doctor_image.png" alt="" />
			</div>
			<div class="text-white sm:mb-16">
				<div class="text-lg sm:text-2xl tracking-tight mb-3">درمان ریزش مو</div>
				<div class="text-sm text-[#A7C0E3] text-justify mb-5 sm:mb-[70px]">
					ریزش مو عوامل مختلفی دارد که اکثر این عوامل درونی هستند ، شما ابتدا باید دلایل ریزش موی
					خود را شناخته و بعد برای درمان اقدام کنید . در مجموعه ی موهاتو با مشاورین متخصص م دریافت
					مشاوره و با روش های کاملا گیاهی و بدون قرص و دارو ریزش موی خود را برای همیشه درمان کنید
				</div>
				<div class="flex items-center gap-3 justify-end">
					<button
						class="border border-white text-white h-12 w-[170px] rounded-full text-xs sm:text-sm"
						>مشاهده پکیج</button
					>
					<button class="bg-white text-primary h-12 w-[170px] rounded-full text-xs sm:text-sm"
						>دریافت نوبت مشاوره</button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.header {
		@apply relative;
		.image-wrapper {
			@apply relative h-[116px] w-[116px] rounded-[40px] bg-white overflow-hidden mb-3;
			@media (min-width: 640px) {
				@apply pb-[25%] h-0 rounded-[70px] overflow-visible;
				flex: 0 0 25%;
			}
			img {
				@apply absolute top-0 right-0 w-full;
				@media screen and (min-width:640px) {
					@apply bottom-0;
					top: unset;
				}
			}
		}
	}
</style>
