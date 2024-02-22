<script>
	import { stratagems } from '$lib/stategem';

	import StratagemKeys from '$lib/StratagemKeys.svelte';

	/**
	 * @param {{ detail: any; }} event
	 */
	function handleActionDone(event) {
		console.log('Callback received:', event.detail);
	}
</script>

<main>
	<ul>
		<StratagemKeys inputs={stratagems[0].Inputs || []} on:actionDone={handleActionDone} />
		-----
		<StratagemKeys inputs={stratagems[1].Inputs || []} on:actionDone={handleActionDone} />
		{#each stratagems as number}
			<div>
				<h4>
					{number.Name} ({number.section})
				</h4>
			</div>
		{/each}
	</ul>
</main>
