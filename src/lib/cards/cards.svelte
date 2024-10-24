<script>
    export let name = 'Title'
    export let category = 'fruits'
    export let product_image = ""
    export let original_price = "0.99"
    export let id


    const ImageUrl = (image) => {
        let url = `http://localhost:8000/static/image/${image}`
        return url
    }
    export let showOrder = true

</script>

<div class="card w-96 bg-base-100 shadow-xl">
    <figure>
        <img src={ImageUrl(product_image)} alt={name} class="rounded-lg">
    </figure>
    <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{original_price}</p>
        <small>{category}</small>
        {#if showOrder}
        <div class="card-actions justify-end">
            <a href="/product/{id}" class="btn btn-primary">Order</a>
        </div>
        {/if}
        <slot></slot>
    </div>
</div>