<script>
    import "tailwindcss/tailwind.css"
    import { fade } from "svelte/transition";
    import Footer from "$lib/others/footer.svelte"
</script>

<div class="container mx-auto px-4" in:fade={{duration: 500}} out:fade ={{duration: 500}}>
    <slot/>
</div>
<Footer/>