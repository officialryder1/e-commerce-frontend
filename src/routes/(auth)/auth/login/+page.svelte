<script>
    import Alert from '$lib/others/alert.svelte';
    import { fade, slide } from 'svelte/transition';
    

    export let form
</script>

<div in:fade={{duration: 500}} out:slide={{ duration: 700}}>
    {#if form?.error}
       <Alert message={form.error}/>
    {/if}
    <h3 class="text-2xl font-bold tracking-wider p-10 text-center">Signin with</h3>
    <span class="flex justify-center items-center">
        <button class="btn btn-warning font-bold tracking-wider text-white fa m-5 border-orange-500"><i class="fab fa-google fa-2x text-orange-500"></i>google</button>
        <button class="fa btn btn-neutral border-white"><i class="fab fa-github fa-2x"></i>Github</button>
    </span><br>
    <hr>
    <h1 class="text-center pt-3 leading-tight">
        <p class="fa">or</p>
    </h1>
    <div class="h-96 flex justify-center items-center">
        <h1 class="text-2xl font-bold fa">SignIn</h1>
        <form class="p-10" method="POST">
            <label class="input input-bordered flex items-center gap-2">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" class="grow" placeholder="Username" name="username"/>
            </label><br>
            <label class="input input-bordered flex items-center gap-2">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                    fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd" />
                </svg>
                <input type="password" class="grow" placeholder="password" name="password"/>
            </label><br>
            <button type="submit" class="font-bold btn btn-neutral border-cyan-200 hover:border-red-900 delay-300">login</button><br><br>
            <span class="font-bold"> don't have an account? <a href="/auth/register" class="link link-hover">register</a></span>
        </form>
    </div>



</div>