<script lang="ts">
	import { loginModalOpen } from '../../stores';
	const closeLoginModal = () => {
		loginModalOpen.set(false);
	};
	const credentials = {
		email: '',
		password: '',
		confirmPassword: ''
	};

	let authError = false;
	let register = false;

	// Errors & messages

	// Email field:
	// invalid email (regex?)

	// Password field:
	// password too short
	// password too long?
	// passwords do not match

	// Account creation:
	// account creation success
	// account creation fail:
	// server error
	// email in use

	// Login
	// login success
	// login fail
	// server error
	// password incorrect

	const handleRegister = () => {
		if (!credentials.email || !credentials.password || !credentials.confirmPassword) {
			console.log('field information is missing!');
		}
		if (credentials.password != credentials.confirmPassword) {
			console.log('passwords must match!');
		}
		console.log('register');
	};

	const handleLogin = () => {
		console.log('login');
	};
</script>

<div class="w-full h-screen fixed top-0 flex flex-col justify-center items-center -z-10">
	<div
		class="flex flex-col relative items-center card w-1/2 max-w-[500px] min-w-[400px] p-8 space-y-8"
	>
		<btn
			class="btn-icon absolute top-4 right-4 text-2xl"
			on:click={closeLoginModal}
			on:keypress={closeLoginModal}
			role="button"
			tabindex="0">x</btn
		>
		<div class="flex flex-col items-center w-full space-y-4">
			{#if !register}
				<h1 class="font-black text-3xl">Login</h1>
			{:else}
				<h1 class="font-black text-3xl">Register</h1>
			{/if}

			<label class="label w-full space-y-2">
				<span>Email</span>
				<input
					class="input variant-form-material"
					type="text"
					placeholder="Email"
					bind:value={credentials.email}
					required
				/>
			</label>
			<label class="label w-full space-y-2">
				<span>Password</span>
				<input
					class="input variant-form-material"
					type="password"
					placeholder="Password"
					bind:value={credentials.password}
					required
				/>
			</label>
			{#if register}
				<label class="label w-full space-y-2">
					<span>Confirm Password</span>
					<input
						class="input variant-form-material"
						type="password"
						placeholder="Confirm Password"
						bind:value={credentials.confirmPassword}
						required
					/>
				</label>
			{/if}
		</div>
		<button class="btn variant-filled">Submit</button>
		{#if !register}
			<div class="flex flex-row space-x-2">
				<p>Don't have an account yet?</p>
				<button
					class="btn p-0 text-success-400 font-bold"
					on:click={() => {
						register = true;
					}}>Create one!</button
				>
			</div>
		{:else}
			<div class="flex flex-row space-x-2">
				<p>Already have an account?</p>
				<button
					class="btn p-0 text-success-400 font-bold"
					on:click={() => {
						register = false;
					}}>Log in!</button
				>
			</div>
		{/if}
	</div>
</div>
