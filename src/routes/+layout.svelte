<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppBar, AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { loginModalOpen } from '../stores';
	const toggleLoginModal = () => {
		loginModalOpen.set(true);
	};
</script>

<AppShell>
	<AppBar>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>

		<svelte:fragment slot="trail">
			<div class="flex flex-row variant-filled">
				<button class="btn" on:click={toggleLoginModal}>Login</button>
			</div>
		</svelte:fragment>
	</AppBar>
	<slot />
</AppShell>
