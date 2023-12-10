<script lang="ts">
	export let section: boolean = true;
</script>

<div class="flex-1 customer-card">
	<div class="flex gap-2">
		<div class="">
			<div
				class="absolute top-[-32px] w-[46pxpx] h-[46pxpx] sm:top-[-35px] sm:w-[70px] sm:h-[70px] bg-white rounded-full p-1 sm:p-2 shadow-xl"
			>
				<img
					src="./images/customer-profile.png"
					class="shadow-md rounded-full w-full object-cover"
					alt=""
				/>
			</div>
			<div class="pt-4">
				<div class="text-sm sm:text-xl text-black font-medium">آرمین خیرخواهان</div>
				<div class="stars">
					{#each { length: 5 - 4 } as index}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="17"
							class="fill-orange-500/30"
							viewBox="0 0 16 17"
						>
							<path
								d="M11.8549 9.83666C11.6885 9.9979 11.6121 10.2311 11.65 10.4598L12.2211 13.6203C12.2693 13.8882 12.1562 14.1593 11.932 14.3141C11.7123 14.4747 11.42 14.4939 11.1804 14.3655L8.3353 12.8816C8.23637 12.8289 8.12653 12.8006 8.01411 12.7974H7.84002C7.77964 12.8064 7.72054 12.8257 7.66658 12.8552L4.82083 14.3462C4.68014 14.4169 4.52083 14.4419 4.36473 14.4169C3.98444 14.3449 3.7307 13.9826 3.79301 13.6004L4.36473 10.4399C4.40263 10.2092 4.32619 9.97477 4.15981 9.81097L1.84017 7.56263C1.64617 7.37441 1.57872 7.09176 1.66737 6.83674C1.75345 6.58235 1.97314 6.3967 2.23845 6.35495L5.43109 5.89179C5.67391 5.86674 5.88718 5.71899 5.99639 5.50058L7.4032 2.61628C7.43661 2.55204 7.47965 2.49294 7.53168 2.44284L7.5895 2.39787C7.61969 2.36447 7.65438 2.33684 7.69292 2.31436L7.76294 2.28866L7.87214 2.2437H8.14259C8.38412 2.26875 8.59675 2.41329 8.70788 2.62913L10.1333 5.50058C10.2361 5.71064 10.4359 5.85646 10.6665 5.89179L13.8591 6.35495C14.129 6.39349 14.3544 6.57978 14.4437 6.83674C14.5279 7.09433 14.4553 7.37698 14.2574 7.56263L11.8549 9.83666Z"
							/>
						</svg>
					{/each}
					{#each { length: 4 } as index}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="17"
							class="fill-orange-500"
							viewBox="0 0 16 17"
						>
							<path
								d="M11.8549 9.83666C11.6885 9.9979 11.6121 10.2311 11.65 10.4598L12.2211 13.6203C12.2693 13.8882 12.1562 14.1593 11.932 14.3141C11.7123 14.4747 11.42 14.4939 11.1804 14.3655L8.3353 12.8816C8.23637 12.8289 8.12653 12.8006 8.01411 12.7974H7.84002C7.77964 12.8064 7.72054 12.8257 7.66658 12.8552L4.82083 14.3462C4.68014 14.4169 4.52083 14.4419 4.36473 14.4169C3.98444 14.3449 3.7307 13.9826 3.79301 13.6004L4.36473 10.4399C4.40263 10.2092 4.32619 9.97477 4.15981 9.81097L1.84017 7.56263C1.64617 7.37441 1.57872 7.09176 1.66737 6.83674C1.75345 6.58235 1.97314 6.3967 2.23845 6.35495L5.43109 5.89179C5.67391 5.86674 5.88718 5.71899 5.99639 5.50058L7.4032 2.61628C7.43661 2.55204 7.47965 2.49294 7.53168 2.44284L7.5895 2.39787C7.61969 2.36447 7.65438 2.33684 7.69292 2.31436L7.76294 2.28866L7.87214 2.2437H8.14259C8.38412 2.26875 8.59675 2.41329 8.70788 2.62913L10.1333 5.50058C10.2361 5.71064 10.4359 5.85646 10.6665 5.89179L13.8591 6.35495C14.129 6.39349 14.3544 6.57978 14.4437 6.83674C14.5279 7.09433 14.4553 7.37698 14.2574 7.56263L11.8549 9.83666Z"
							/>
						</svg>
					{/each}
				</div>
				<div class="flex items-center gap-2 mt-1.5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="21"
						viewBox="0 0 19 21"
						fill="none"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M13.2484 19.6239H5.20465C2.24999 19.6239 -0.0167259 18.5567 0.627127 14.2614L1.37682 8.44025C1.77371 6.29701 3.1408 5.47676 4.3403 5.47676H14.148C15.3652 5.47676 16.6529 6.35875 17.1115 8.44025L17.8612 14.2614C18.408 18.0716 16.2031 19.6239 13.2484 19.6239Z"
							stroke="#0B5ACC"
							stroke-width="1.05117"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M13.3807 5.26507C13.3807 2.96592 11.5169 1.10208 9.21774 1.10208V1.10208C8.11059 1.09739 7.04718 1.53392 6.26265 2.31514C5.47812 3.09636 5.0371 4.15792 5.03711 5.26507H5.03711"
							stroke="#0B5ACC"
							stroke-width="1.05117"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12.0753 9.6045H12.0313"
							stroke="#0B5ACC"
							stroke-width="1.05117"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M6.45719 9.6045H6.41309"
							stroke="#0B5ACC"
							stroke-width="1.05117"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<button
						class="bg-gradient-to-r from-[#FF9D7B] to-[#FF83AD] px-2.5 h-7 rounded-full text-white text-xs sm:text-base"
						>پکیج عقیق</button
					>
				</div>
				<div class="text-xs sm:text-sm text-gray-400 mt-4">
					کسب و کار در یک بازه زمانی طولانی نیاز دارد. برای اینکه مشتریان به ثبات برسند
				</div>
			</div>
		</div>
		<div
			class="realtive flex flex-col items-center justify-center basis-[110px] sm:basis-[170px] flex-grow-0 flex-shrink-0"
		>
			<img src="./images/customer-image.png" alt="" />
			<button
				class="{section
					? 'bg-primary'
					: 'bg-secondary'} h-[30px] -mt-[15px] text-white px-4 text-xs font-semibold rounded-lg"
				>مشاهده عکس</button
			>
		</div>
	</div>
</div>

<style lang="scss">
	.customer-card {
		@apply flex-1 rounded-2xl relative bg-white my-10 sm:h-[210px] px-3 py-2.5 sm:px-[26px] sm:py-[20px];
	}
	.stars {
		@apply flex -items-center gap-1;
	}
</style>
