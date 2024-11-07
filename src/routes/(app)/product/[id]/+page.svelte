<script>
    import Cards from "$lib/cards/cards.svelte";

    import { addToCart } from "$lib/utils/cartStore"
    export let data

    
    let cards = data?.product
    let showOrder = false

    const handleAddToCart = () => {
        addToCart(cards)
    }
  
</script>

<svelte:head>
    <title>{cards.name} | Discova-ng</title>
    <meta name="description" content={cards.category}/>
    <meta property="og:title" content={cards.name}/>
    <meta property="og:category" content={cards.category}/>
    <meta property="og:image" content={cards.product_image}/>
    <meta property="og:url" content={`http://localhost:8000/${cards.id}`}/>
    <meta name="twitter:card" content="summary_large_image" />

    <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: cards.name,
          image: [cards.product_image],
          description: cards.category,
          brand: cards.category,
          offers: {
            "@type": "Offer",
            priceCurrency: "NGN",
            price: cards.original_price,
            availability: "https://schema.org/InStock",
            url: `http://localhost:8000/${cards.id}`
          }
        })}
      </script>
</svelte:head>

<h1 class="text-center font-bold text-3xl p-10 capitalize">{cards.name}</h1>
<div class="flex justify-center items-center ">
    
    <Cards {...cards} {showOrder}>
        <button class="btn btn-primary " on:click={handleAddToCart}>Add to Cart</button>
    </Cards>
</div>