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

    let showCard = true
    let changeImage = false
    let updateDetail = false

    function updateImage(){
        showCard = false
        changeImage = true
    }

    function editDetail(){
        showCard = false
        updateDetail = true
    }
</script>

{#if showCard}
<div class="card w-96 bg-base-100 shadow-xl">
    <figure>
        <img src={ImageUrl(product_image)} alt={name} class="rounded-lg">
    </figure>
    <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{original_price}</p>
        <small>{category}</small>
        <p hidden>{id}</p>
        <div class="card-actions justify-center">
                <button class="btn btn-info btn-sm text-white font-bold" on:click = {editDetail}>Edit Details</button>
                <button class="btn btn-error btn-sm text-white font-bold" on:click={updateImage}>Change Image</button>
        </div>
    </div>
</div>
{/if}

{#if changeImage}
    <div class="flex flex-col justify-center items-center h-screen">
        <h1 class="text-center font-bold tracking-wider text-2xl p-10">Upload Product Image</h1>

        <form method="POST" action="?/uploadImage" enctype="multipart/form-data">
            <input type="text" name="id" value={id} hidden>
            <input type="file" name="product_image" class="file-input file-input-bordered file-input-error w-full max-w-xs">
            <button class="btn btn-error m-5">Upload</button>
        </form>
    </div>
{/if}

{#if updateDetail}
<div class=" flex justify-center items-center flex-col">
    <h1 class="text-center font-bold tracking-wider text-2xl p-10">Upload Product</h1><hr>
    <form method="POST" class="form-control" action="?/uploadProduct">
        <!-- Product name -->
        <label class="label label-text" for="product namet">Product Name</label>
        <input type="text" name="name" class="input input-bordered input-error w-full max-w-sm" bind:value = {name}>
        <input type="text" name="id" value={id} hidden>
        <!--  -->
        <label for="category" class="label label-text">Category</label>
        <input type="text" name="category" class="input input-bordered input-error w-full max-w-sm" bind:value={category}>

        <!-- Original Price -->
         <label for="price" class="label label-text">Price</label>
         <input type="text" name="original_price" class="input input-bordered input-error w-full max-w-sm" bind:value={original_price}>

         <!-- New price -->
          <label class="label label-text" for="tax">After Discount Price (leave blank if none)</label>
          <input type="text" name="new_price" class="input input-bordered input-error w-full max-w-sm" value="0">

          <!-- Offer exp -->
          <label class="label label-text" for="tax">Offer Expire Date (leave blank if none)</label>
          <input type="datetime" name="offer_exp_date" class="input input-bordered input-error w-full max-w-sm" value="2024-10-21">

          <!-- Image -->
           <input type="text" bind:value={product_image} name="product_image" hidden>
          <button class="btn btn-error m-10 text-white font-bold tracking-wider">upload</button>
    </form>
</div>
{/if}