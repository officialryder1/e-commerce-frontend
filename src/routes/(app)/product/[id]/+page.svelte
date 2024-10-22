<script>
    import Cards from "$lib/cards/cards.svelte";

    export let data

    
    let cards = data?.product?.data

</script>

<h1 class="text-center font-bold text-3xl p-10 capitalize">{cards.name}</h1>
<div class="flex justify-center items-center ">
    
    <Cards {...cards}/>
</div>