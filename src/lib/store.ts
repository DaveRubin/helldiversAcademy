import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Function to initialize the store with a value from localStorage
// or fall back to a default value if nothing is in localStorage
export function persistedStore(key: string, defaultValue: string) {

	const storedValue = browser ? localStorage.getItem(key) : defaultValue;
	const data = storedValue ? JSON.parse(storedValue) : defaultValue;
	const store = writable(data);

	// Subscribe to the store's changes and update localStorage accordingly
	store.subscribe((value) => {
		if (browser) {

			localStorage.setItem(key, JSON.stringify(value));
		}
	});

	return store;
}