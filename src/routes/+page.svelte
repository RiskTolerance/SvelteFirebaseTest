<script lang="ts">
	import Authenticate from './components/Authenticate.svelte';
	import { writable, get } from 'svelte/store';

	import { loginModalOpen } from '../stores';
</script>

{#if $loginModalOpen}
	<Authenticate />
{/if}
