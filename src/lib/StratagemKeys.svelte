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
	let isWrong = false;

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
			isWrong = true;
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
				isWrong = false;
			}
			if (action.pressedKey) {
				if (isOn) {
					updatePressed(action.pressedKey);
				}
			}
		});
	});
</script>

<div class={'main container ' + (isOn ? 'on' : 'off') + ' ' + (isWrong ? 'wrong' : '')}>
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
		display: flex;
		gap: 8px;

		align-items: center;

		&.main {
			transition: all 0.1s;
			margin-bottom: 16px;
			background-color: rgba(0, 0, 0, 0.2);
			width: max-content;
			padding: 16px;
			border-radius: 8px;
			border: 1px solid rgba(255, 255, 255, 0.5);
			min-height: 40px;
			max-height: 40px;
			flex: 1;
			overflow: hidden;

			&.wrong {
				opacity: 0.4;
				background-color: rgba(128, 0, 0, 0.2);
			}
		}
		&.on {
			background-color: rgba(0, 0, 0, 0.6);
		}
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
