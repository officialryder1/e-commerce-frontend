<script>
    import Alert from "$lib/others/alert.svelte";
    import Card from "$lib/cards/card.svelte";
    import Search from "$lib/search/search.svelte";
    import Cart from "$lib/Cart/Cart.svelte";
  
    export let data

    let user = data?.user?.data
    let user_verify = data?.user?.is_verify
    let user_id = data?.user?.user_id

 
    export let cards = data?.products?.data
   

    let productImage = cards.map(image => image.product_image)
    
</script>
{#if user}
    {#if !user_verify}
        <Alert style="alert alert-success" message="Please! verify your account to start shopping" showButton=true {user_id}/>
    {/if}
{/if}
<br>
<Cart/>
<Search {cards}/>

<h1 class="p-10 font-bold tracking-tight text-green-400">Start shopping through our products</h1>
<div class="flex justify-center items-center mb-10">
    
    <div class="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
        {#each productImage as image }
            <div class="carousel-item">
                <img
                src={`http://localhost:8000/static/image/${image}`}
                class="rounded-box" alt="Product Img" width="300"/>
            </div>
        {/each}
    </div>
</div>
<span class="p-10 text-green-400 fa">Fruits</span>
<section>
    <div class="flex justify-center items-center flex-shrink">
        <Card {cards}/>
    </div>
</section>