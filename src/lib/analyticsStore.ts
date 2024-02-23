import { writable } from 'svelte/store';
import { v4 } from 'uuid'

export const analyticsStore = writable([] as any[]);




export const addEvent = (event: string, data: any) => {
	const new_event = {
		id: v4(),
		data,
		event,
		type: "event",
	}

	analyticsStore.update(existing_events => [...existing_events, new_event])
}


analyticsStore.subscribe((queue) => {
	let next = queue && queue.length && queue.shift();

	let retries = 3;
	let previousExecutedOperationId;

	while (next) {
		const { type, event, data, id } = next;

		if (!type || !event || !data || !id) {
			console.log('Incorrect analytics event data');
			next = queue.shift();
			continue;
		}

		// if current id is not equal to previous id then reassign retries to 3
		if (id && id !== previousExecutedOperationId) retries = 3;

		previousExecutedOperationId = id;

		// @ts-ignore
		if (typeof gtag !== 'undefined') {
			// @ts-ignore
			gtag(type, event, data);
			// console.log('event created with data', next);
		} else {
			// gtag not found, retry till retries become 0
			if (retries > 0) {
				retries--;
				continue;
			} else {
				console.log('Analytics event failed to reach server with: ', next);
			}
		}
		next = queue.shift();
	}
});