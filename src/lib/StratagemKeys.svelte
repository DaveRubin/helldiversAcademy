<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	import { listenToChanges } from '$lib/controller';
	import type { Stratagem } from './types';
	import { stratagems } from './stategem';
	import Arrow from './arrow.svelte';

	const dispatch = createEventDispatcher();

	export let stratagem: Stratagem = stratagems[0];
	const inputs = stratagem.input;

	let pressedInputs: string[] = [];
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
				console.log(isOn);
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

<div class={'main container ' + (isOn ? 'on' : 'off')}>
	<div class="image-container">
		{#if stratagem.icon}
			<img src={stratagem.icon} />
		{/if}
	</div>
	<div>
		<div>
			<p>{stratagem.text}</p>
		</div>
		<div class="container">
			{#each inputs as item, index (item + '-' + index)}
				<div class={'arrow ' + (index < pressedInputs.length ? 'selected' : '') + ' ' + item}>
					<Arrow />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	p {
		margin: 0;
		font-family: Oswald;
		font-weight: 300;
		font-size: 18px;
		color: white;
	}
	.image-container {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	img {
		width: 32px;
		height: 32px;
	}

	.container {
		&.main {
			transition: background-color 0.1s;
			background: rgba(1, 0, 0, 0.4);
			width: max-content;
			padding: 16px;
			border-radius: 8px;
			border: 1px solid rgba(255, 255, 255, 0.5);
		}
		&.on {
			background-color: #222222;
		}
		display: flex;
		gap: 8px;

		align-items: center;
	}

	.arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		fill: transparent;
		stroke: yellow;
		stroke-width: 32px;

		&.selected {
			fill: yellow;
			stroke: transparent;
		}
		&.Up {
			transform: rotate(270deg);
		}
		&.Right {
			transform: rotate(0deg);
		}
		&.Down {
			transform: rotate(90deg);
		}
		&.Left {
			transform: rotate(180deg);
		}
	}
</style>
