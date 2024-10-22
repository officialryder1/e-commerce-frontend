<script>
   import Card from '$lib/cards/dashboad/card.svelte'
   export let cards = {}
</script>

<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-y-auto max-h-[400px]">
   {#if cards.length >= 1}
      {#each cards as card (card.id) }
         <div class="flex w-full justify-center items-center">
            <Card {...card}/>
         </div>
      {/each}
   {:else}
   <p class="font-bold">You have not uploaded any product. </p>
   <a href="/dashboard/upload" class="link link-error pl-1"> upload</a>
   {/if}
   
</div>