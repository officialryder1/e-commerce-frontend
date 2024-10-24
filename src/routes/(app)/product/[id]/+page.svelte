<script>
    import Cards from "$lib/cards/cards.svelte";
    import Cart from "$lib/Cart/Cart.svelte";
    import { addToCart } from "$lib/utils/cartStore"
    export let data

    
    let cards = data?.product?.data
    let showOrder = false

    const handleAddToCart = () => {
        addToCart(cards)
    }
</script>
<Cart/>
<h1 class="text-center font-bold text-3xl p-10 capitalize">{cards.name}</h1>
<div class="flex justify-center items-center ">
    
    <Cards {...cards} {showOrder}>
        <button class="btn btn-primary " on:click={handleAddToCart}>Add to Cart</button>
    </Cards>
</div>