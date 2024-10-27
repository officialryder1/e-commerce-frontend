<script>
    import Cards from "./cards.svelte";
    export let cards = {}

    console.log(cards)
</script>

<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-y-auto max-h-[400px]">
    {#if cards.length >= 1}
    {#each cards as card (card.id) }
        <div class="flex w-full">
            <Cards {...card}/>
        </div>
    {/each}
    {:else}
        <Cards/>
    {/if}

</div>