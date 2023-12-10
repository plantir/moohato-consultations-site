<script lang="ts">
	export let items: any = [];
</script>

<div class="sm:px-20 {$$props.class}">
	<div class="hidden sm:block border-t border-primary mx-16 mb-4" />
	<div class="flex items-center gap-2 text-xl font-bold text-gray-800">
		<svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12.0569 16.9091H5.22685C2.71801 16.9091 0.793313 16.0029 1.34002 12.3557L1.97659 7.41294C2.3136 5.59309 3.4744 4.89661 4.49292 4.89661H12.8208C13.8543 4.89661 14.9477 5.64551 15.3371 7.41294L15.9737 12.3557C16.438 15.591 14.5657 16.9091 12.0569 16.9091Z"
				stroke="#0B5ACC"
				stroke-width="1.22727"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M12.1691 4.71685C12.1691 2.76461 10.5865 1.18201 8.6343 1.18201V1.18201C7.6942 1.17802 6.79125 1.54869 6.12509 2.21203C5.45894 2.87537 5.08446 3.77675 5.08447 4.71685H5.08447"
				stroke="#0B5ACC"
				stroke-width="1.22727"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M11.0607 8.40149H11.0232"
				stroke="#0B5ACC"
				stroke-width="1.22727"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M6.29015 8.40149H6.2527"
				stroke="#0B5ACC"
				stroke-width="1.22727"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		<div>پکیج ها</div>
	</div>
	<div class="text-gray-500 font-medium mt-4 text-sm sm:text-base text-justify">
		پس پیشنهاد می کنیم که حتی برای درمان ریزش مو با استفاده از طب سنتی هم با یک پزشک متخصص و با
		تجربه در این زمینه مشورت کنید. زیرا استفاده خودسرانه از مواد گیاهی مختلف نیز می تواند ریزش مو را
		دوچندان کند.
	</div>
	<div class="packages">
		<div class="package package-{2}">
			<div class="package-number">{2}</div>
			<div class="package-name">پکیج شمیم</div>
			<div class="package-price">
				50,000
				<span> /تومان </span>
			</div>
			<div class="border-t border-white" />
			<div class="package-features">
				{#each { length: 3 } as index}
					<div class="feature">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="21"
							height="20"
							viewBox="0 0 21 20"
							fill="none"
						>
							<path
								d="M4.61816 9.92517L8.719 14.026L16.9207 5.82434"
								stroke="#FFF0A1"
								stroke-width="2.4605"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						شامل ۵ بسته ویژه موهاتو
					</div>
				{/each}
			</div>
		</div>
		<div class="package package-{1}">
			<div class="package-number">{1}</div>
			<div class="package-name">پکیج شمیم</div>
			<div class="package-price">
				100,000
				<span> /تومان </span>
			</div>
			<div class="border-t border-white" />
			<div class="package-features">
				{#each { length: 4 } as index}
					<div class="feature">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="21"
							height="20"
							viewBox="0 0 21 20"
							fill="none"
						>
							<path
								d="M4.61816 9.92517L8.719 14.026L16.9207 5.82434"
								stroke="#FFF0A1"
								stroke-width="2.4605"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						شامل ۵ بسته ویژه موهاتو
					</div>
				{/each}
			</div>
		</div>
		<div class="package package-{3}">
			<div class="package-number">{3}</div>
			<div class="package-name">پکیج شمیم</div>
			<div class="package-price">
				20,000
				<span> /تومان </span>
			</div>
			<div class="border-t border-white" />
			<div class="package-features">
				{#each { length: 3 } as index}
					<div class="feature">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="21"
							height="20"
							viewBox="0 0 21 20"
							fill="none"
						>
							<path
								d="M4.61816 9.92517L8.719 14.026L16.9207 5.82434"
								stroke="#FFF0A1"
								stroke-width="2.4605"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						شامل ۵ بسته ویژه موهاتو
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.packages {
		@apply grid grid-cols-1 sm:grid-cols-3 items-end gap-7 text-white mt-[100px] px-10 sm:px-0;
		.package {
			@apply p-5 rounded-xl relative;
			&::before {
				content: '';
				@apply absolute -bottom-4 right-[5%] w-[90%] h-full -z-10;
				border-radius: 16.364px;
				filter: blur(9.819999694824219px);
			}
			&:first-child {
				background: linear-gradient(160deg, #77ceff 21.92%, #ff7cbb 103.71%);
				&::before {
					background: rgba(184, 98, 255, 0.4);
				}
			}
			&:nth-child(2) {
				background: linear-gradient(160deg, #ff9c7a 21.92%, #ff7fb3 103.7%, #fe7325 103.71%);
				&::before {
					background: rgba(255, 130, 175, 0.4);
				}
			}
			&:last-child {
				background: linear-gradient(160deg, #3acec5 21.92%, #70e3aa 103.71%);
				&::before {
					background: rgba(112, 227, 170, 0.4);
				}
			}
			&-name {
				@apply text-xl sm:text-[26px] text-center text-white;
			}
			&-price {
				@apply text-[30px] sm:text-[49px] text-white font-bold text-center;
				span {
					@apply font-medium text-sm sm:-mr-3;
				}
			}
			&-number {
				line-height: 60px;
				@apply text-center relative text-[60px] sm:text-[80px] font-extrabold text-white;
				@media (min-width: 640px) {
					line-height: 80px;
				}
				&:before {
					content: '';
					@apply absolute rounded-xl bottom-0 right-1/2 translate-x-1/2 w-12 h-9 sm:w-[75px] sm:h-12 border border-white/20 bg-white/10;
				}
			}
			&-features {
				@apply flex flex-col gap-0.5 mt-3 min-h-[80px];
				.feature {
					@apply flex items-center gap-2.5 sm:gap-4 h-6 text-xs sm:text-base;
				}
			}
			&-submit {
				@apply w-full h-10 sm:h-[60px] bg-white text-center rounded-lg mt-3 text-sm sm:text-base;
			}
		}
	}
</style>
