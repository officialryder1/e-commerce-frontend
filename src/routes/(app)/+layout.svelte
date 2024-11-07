<script>
    import Navbar from "$lib/Navbar/navbar.svelte";

    import "tailwindcss/tailwind.css"
    export let data

    let user = data?.user
</script>
<Navbar {user}/>


<slot/>
