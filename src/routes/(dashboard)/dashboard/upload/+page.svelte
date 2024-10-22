<script>
    import { enhance } from "$app/forms"

    let uploadDetail = true
    let uploadImage = false
    const handleClick = () => {
        uploadDetail = false
        uploadImage = true
    }

    let date = new Date()
</script>

{#if uploadDetail}
<div class=" flex justify-center items-center flex-col">
    <h1 class="text-center font-bold tracking-wider text-2xl p-10">Upload Product</h1><hr>
    <form method="POST" class="form-control" action="?/uploadProduct" use:enhance={handleClick}>
        <!-- Product name -->
        <label class="label label-text" for="product namet">Product Name</label>
        <input type="text" name="name" class="input input-bordered input-error w-full max-w-sm" placeholder="Product Name">

        <!--  -->
        <label for="category" class="label label-text">Category</label>
        <input type="text" name="category" class="input input-bordered input-error w-full max-w-sm" placeholder="Category">

        <!-- Original Price -->
         <label for="price" class="label label-text">Price</label>
         <input type="text" name="original_price" class="input input-bordered input-error w-full max-w-sm" placeholder="Price">

         <!-- New price -->
          <label class="label label-text" for="tax">After Discount Price (leave blank if none)</label>
          <input type="text" name="new_price" class="input input-bordered input-error w-full max-w-sm" value="0">

          <!-- Offer exp -->
          <label class="label label-text" for="tax">Offer Expire Date (leave blank if none)</label>
          <input type="datetime" name="offer_exp_date" class="input input-bordered input-error w-full max-w-sm" value="2024-10-21">

          <!-- Image -->
           <input type="text" value="product_default.jpg" name="product_image" hidden>
          <button class="btn btn-error m-10 text-white font-bold tracking-wider">upload</button>
    </form>
</div>
{/if}

{#if uploadImage}
    <div class="flex flex-col justify-center items-center h-screen">
        <h1 class="text-center font-bold tracking-wider text-2xl p-10">Upload Product Image</h1>

        <form method="POST" action="?/uploadImage" enctype="multipart/form-data">
            <input type="file" name="product_image" class="file-input file-input-bordered file-input-error w-full max-w-xs">
            <button class="btn btn-error m-5">Upload</button>
        </form>
    </div>
{/if}