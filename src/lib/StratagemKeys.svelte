<script>
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	import { listenToChanges } from '$lib/controller';

	const dispatch = createEventDispatcher();
	/**
	 * @type {string | any[]}
	 */
	export let inputs = [];

	// Event dispatcher for the callback
	/**
	 * @type {any[]}
	 */
	let pressedInputs = [];
	let isOn = false;

	// @ts-ignore
	const updatePressed = (key) => {
		// console.log(pressedInputs);
		const newKeys = [...pressedInputs, key];
		const isCorrect = newKeys.every((key, index) => inputs[index] === key);
		if (isCorrect) {
			pressedInputs = newKeys;
			if (pressedInputs.length === inputs.length) {
				dispatch('actionDone', { completed: true });
			}
		} else {
			isOn = false;
			pressedInputs = [];
			dispatch('actionDone', { completed: false });
		}
	};

	onMount(() => {
		return listenToChanges((action) => {
			if (action.toggle !== undefined) {
				isOn = action.toggle;
				if (!isOn) {
					pressedInputs = [];
				}
			}
			if (action.pressedKey) {
				if (isOn) {
					updatePressed(action.pressedKey);
				}
			}
		});
	});
</script>

<ul class={isOn ? 'on' : 'off'}>
	{#each inputs as item, index (item + '-' + index)}
		<li class={index < pressedInputs.length ? 'selected' : ''}>{item}</li>
	{/each}
</ul>

<style>
	.on {
		background-color: grey;
	}
	.selected {
		color: red;
	}
</style>
