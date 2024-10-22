<script>
    import UpdateCard from "$lib/cards/dashboad/UpdateCard.svelte";

    export let data

    export let cards = data?.product?.data

   
</script>

<h1 class="fa tracking-widest">Update product</h1>
<div class="flex justify-center items-center h-screen">
    <UpdateCard {...cards}/>
</div>