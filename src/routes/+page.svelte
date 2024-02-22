<script lang="ts">
	export const prerender = true;
	import { stratagems } from '$lib/stategem';
	import StratagemKeys from '$lib/StratagemKeys.svelte';
	import _ from 'lodash';
	const groups = Object.entries(_.groupBy(stratagems, 'section'));
	function handleActionDone(event: any) {
		console.log('Callback received:', event.detail);
	}
</script>

<main>
	<img class="background-image" alt="background" src="/images/banner.jpeg" />
	<div class="main-container">
		{#each stratagems as stratagem}
			<StratagemKeys {stratagem} on:actionDone={handleActionDone} />
		{/each}
	</div>
</main>

<style>
	h4 {
		margin: 0;
		font-family: Oswald;
		font-weight: 400;
		font-size: 24px;
		color: white;
	}
	.background-image {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
	}
	main {
		padding: 0;
		margin: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.main-container {
		display: flex;
		flex-direction: column;
		padding: 32px;
		width: 80vw;
		height: 80vh;
		overflow: scroll;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 16px;
		border: solid 1px rgba(255, 255, 255, 0.5);
	}
</style>
