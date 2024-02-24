<script lang="ts">
	import { addEvent } from '$lib/analyticsStore';
	export const prerender = true;
	import { stratagems } from '$lib/stategem';
	import StratagemKeys from '$lib/StratagemKeys.svelte';
	import _ from 'lodash';
	const sections = _.groupBy(stratagems, 'section');
	let groupFilters: Record<string, any> = {};
	let filteredStartegem = Object.keys(groupFilters).length
		? stratagems.filter((s) => groupFilters[s.section])
		: stratagems;
	const groups = Object.keys(sections);

	function handleActionDone(event: any) {
		// console.log('Callback received:', event.detail);
	}

	function toggle(group: string) {
		const toggleOff = !!groupFilters[group];

		addEvent('toggle-section', { toggleOff, section: group });

		if (toggleOff) {
			delete groupFilters[group];
			groupFilters = { ...groupFilters };
		} else {
			groupFilters = { ...groupFilters, [group]: true };
		}
		filteredStartegem = Object.keys(groupFilters).length
			? stratagems.filter((s) => groupFilters[s.section])
			: stratagems;
	}
	let uniqueKey = Date.now(); // Initialize with a unique value

	// Update uniqueKey whenever filteredStratagem changes
	$: filteredStartegem, (uniqueKey = Date.now());
</script>

<main>
	<img class="background-image" alt="background" src="/images/banner.jpeg" />
	<div class="main-container">
		<div class="staratagem-container">
			<p class="stratagem-title">SHIFT+WASD to activate stratagems codes</p>
			<div class="list-container">
				{#key uniqueKey}
					{#each filteredStartegem as stratagem}
						<StratagemKeys {stratagem} on:actionDone={handleActionDone} />
					{/each}
				{/key}
			</div>
		</div>
		<div class="filters-container">
			{#each groups as group}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					on:click={() => toggle(group)}
					class={'section-filter ' + (groupFilters[group] ? 'selected' : '')}
				>
					{group}
				</div>
			{/each}
		</div>
	</div>
	<caption
		>Made by David rubin, <a target="_blank" href="https://forms.gle/Xp23htAAq4KKqSNH9"
			>(suggestions box here)
		</a></caption
	>
</main>

<style>
	.staratagem-container {
		flex: 2;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
	caption {
		position: absolute;
		bottom: 16px;
		font-size: 12px;
		left: 16px;
	}
	.stratagem-title {
		position: inherit;
	}
	a {
		color: white;
	}
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
		flex-direction: row;
		padding: 32px;
		width: 80vw;
		height: 80vh;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 8px;
		border: solid 1px rgba(255, 255, 255, 0.5);
		display: flex;
		gap: 16px;
	}
	body {
		scrollbar-face-color: #eec800;
		scrollbar-shadow-color: #006cb4;
		scrollbar-highlight-color: #006cb4;
		scrollbar-3dlight-color: #006cb4;
		scrollbar-darkshadow-color: #006cb4;
		scrollbar-track-color: #006cb4;
		scrollbar-arrow-color: #c1c1d1;
	}
	.list-container {
		overflow: scroll;
		overflow-x: hidden;
	}
	.filters-container {
		/* overflow-x: hidden;
		overflow: scroll; */
		padding-top: 23px;
		flex: 1;
	}
	.section-filter {
		background: rgba(0, 0, 0, 0.5);
		border-radius: 8px;
		padding: 8px;
		border: solid 1px rgba(255, 255, 255, 0.5);
		text-align: center;
		cursor: pointer;
		margin-bottom: 8px;
		&.selected {
			color: yellow;
			border-color: yellow;
		}
	}
</style>
