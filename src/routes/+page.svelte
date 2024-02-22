<script lang="ts">
	export const prerender = true;
	import { stratagems } from '$lib/stategem';
	import StratagemKeys from '$lib/StratagemKeys.svelte';

	function handleActionDone(event: any) {
		console.log('Callback received:', event.detail);
	}
</script>

<main>
	<div class="main-container">
		{#each stratagems as stratagem}
			<StratagemKeys {stratagem} on:actionDone={handleActionDone} />
		{/each}
	</div>
</main>

<style>
	main {
		padding: 0;
		margin: 0;
		background-image: url('/images/banner.jpeg');
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.main-container {
		/* background-color: grey; */
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 32px;
		width: 80vw;
		height: 80vh;
		overflow: scroll;
		background: rgba(0, 0, 0, 0.4);
		border-radius: 16px;
	}
</style>
