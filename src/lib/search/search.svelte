<script>
    let query = ''
    export let cards = {}

    $: filteredProducts = cards.filter(card => 
        card.name.toLowerCase().includes(query.toLowerCase())
    )
</script>
<div class="flex justify-center items-center">

    <label class="input input-bordered flex items-center gap-2">
        <input type="text" class="grow" placeholder="Search" bind:value={query} />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70">
            <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd" />
        </svg>
    </label>
</div><br>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {#if query}
        {#if filteredProducts.length > 0}
            {#if filteredProducts}
                {#each filteredProducts as product (product.id)}
                    <a href="/product/{product.id}">
                        <div class="border border-gray-200 p-4 rounded-lg shadow mx-10 ">
                            <h1 class="text-lg font-semibold">{product.name}</h1>
                            <p class="text-sm text-grey-500">Category: {product.category}</p>
                        </div>
                    </a>
                {/each}
            {:else}
                <p>Product not in stock.</p>
            {/if}
        {/if}
    {/if}
</div>