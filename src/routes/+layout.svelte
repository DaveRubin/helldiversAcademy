<script lang="ts">
	export const prerender = true;
	import '$lib/global.css';
	import Analytics from '$lib/Analytics.svelte';
	
</script>

<slot />
<Analytics/>
