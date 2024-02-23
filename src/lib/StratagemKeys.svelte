<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	import { persistedStore } from './store';

	import { listenToChanges } from '$lib/controller';
	import type { Stratagem } from './types';
	import { stratagems } from './stategem';
	import Arrow from './arrow.svelte';
	import { addEvent } from './analyticsStore';

	export let stratagem: Stratagem = stratagems[0];
	let highScore = persistedStore(stratagem.text, '0');

	const dispatch = createEventDispatcher();

	const inputs = stratagem.input;

	let pressedInputs: string[] = [];
	let isOn = false;
	let isWrong = false;
	let startTime = Date.now();
	let completionTime = '';
	// let highScore = localStorage.getItem(stratagem.text) || '-';

	const getTime = (time: number) => Math.floor(time / 10) / 100 + 's';
	let highScoretime = $highScore ? getTime($highScore) : '-';
	function showComplete() {
		const time = Date.now() - startTime;
		completionTime = getTime(time);
		setTimeout(() => {
			completionTime = '';
		}, 3000);

		const isHighScore = time < $highScore || $highScore === '0';
		addEvent('completed', { isHighScore, stratagem: stratagem.text });

		if (isHighScore) {
			highScore.set(time);
			highScoretime = completionTime;
		}
	}

	// @ts-ignore
	const updatePressed = (key) => {
		const newKeys = [...pressedInputs, key];
		const isCorrect = newKeys.every((key, index) => inputs[index] === key);
		const time = Date.now() - startTime;

		if (isCorrect) {
			pressedInputs = newKeys;
			if (pressedInputs.length === inputs.length) {
				dispatch('actionDone', { completed: true });
				showComplete();
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

				if (!isOn) {
					pressedInputs = [];
				} else {
					startTime = Date.now();
					completionTime = '';
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
			<p>{stratagem.text} - {highScoretime}</p>
		</div>
		<div class="container">
			{#each inputs as item, index (item + '-' + index)}
				<div class={'arrow ' + (index < pressedInputs.length ? 'selected' : '') + ' ' + item}>
					<Arrow />
				</div>
			{/each}
		</div>
	</div>
	{#if completionTime}
		<p class="complete">{completionTime}</p>
	{/if}
</div>

<style>
	@keyframes moveRightFadeOut {
		from {
			transform: translateX(0);
			opacity: 1;
		}
		to {
			transform: translateX(32px);
			opacity: 0;
		}
	}
	.complete {
		position: absolute;
		right: -48px;
		font-size: 24px;
		animation: moveRightFadeOut 2s forwards;
	}
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
			position: relative;
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
			/* overflow: hidden; */

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
