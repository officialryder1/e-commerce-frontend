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

</script>

<div class="card w-96 bg-base-100 shadow-xl">
    <figure>
        <img src={ImageUrl(product_image)} alt={name} class="rounded-lg">
    </figure>
    <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{original_price}</p>
        <small>{category}</small>
        <div class="card-actions justify-center">
                <a href="/dashboard/product/{id}" class="btn btn-info btn-sm text-white font-bold">Edit Product</a>
                <a href="/dashboard/delete/{id}" class="btn btn-error btn-sm text-white font-bold">Delete Product</a>
        </div>
    </div>
</div>