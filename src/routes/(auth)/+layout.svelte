<script>
    import "tailwindcss/tailwind.css"
    import { fade } from "svelte/transition";
</script>

<div class="container mx-auto px-4" in:fade={{duration: 500}} out:fade ={{duration: 500}}>
    <slot/>
</div>