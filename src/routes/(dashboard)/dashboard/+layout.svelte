<script>
    import DashboardNav from "$lib/Navbar/dashboard_nav.svelte";
    import { fade, fly} from "svelte/transition";
    export let data

    const user = data?.user
    
</script>
<DashboardNav {user}/>


<main class="m-10" in:fade={{ duration: 500}} out:fly={{duration: 500}}>
    <slot/>
</main>