<script>
    import { cart, removeFromCart } from '$lib/utils/cartStore'

    const ImageUrl = (image) => {
        let url = `http://localhost:8000/static/image/${image}`
        return url
    }

    $: total = $cart.reduce((sum, item) => sum + item.original_price, 0);

    const updateQuantity = (id, newQuantity) => {
        const item = $cart.find(item => item.id === id);
        if (item) {
            item.quantity = newQuantity;
            total = $cart.reduce((sum, item) => sum + item.original_price * item.quantity, 0);
        }
    };
    
</script>

<div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>
    
    {#if $cart.length > 0}
    <div class="flex flex-col lg:flex-row gap-8">
        
        <!-- Cart Items Section -->
        <div class="flex-1">
            <h2 class="text-xl font-semibold mb-4">Items in Your Cart</h2>
            <div class="space-y-4">
                {#each $cart as item (item.id)}
                <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <img src={ImageUrl(item.product_image)} alt={item.name} class="w-20 h-20 object-cover rounded-lg">
                    
                    <div class="ml-4 flex-1">
                        <h3 class="text-lg font-semibold">{item.name}</h3>
                        <p class="text-sm text-gray-500">Price: ${item.original_price.toFixed(2)}</p>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <div>
                            <label class="block text-sm font-medium">Quantity</label>
                            <input type="number" class="border border-gray-300 rounded-md px-2 py-1 w-20" 
                                   min="1" value={item.quantity} 
                                   on:input={(e) => updateQuantity(item.id, +e.target.value)}>
                        </div>
                        <button class="text-red-500 hover:underline" on:click={() => removeFromCart(item.id)}>
                            Remove
                        </button>
                    </div>
                    
                    <p class="text-lg font-semibold">${(item.original_price * item.quantity).toFixed(2)}</p>
                </div>
                {/each}
            </div>
        </div>

        <!-- Summary Section -->
        <div class="lg:w-1/3">
            <div class="p-6 bg-gray-100 rounded-lg">
                <h2 class="text-xl font-semibold mb-4">Cart Summary</h2>
                
                <div class="space-y-2 mb-4">
                    {#each $cart as item}
                    <div class="flex justify-between">
                        <span>{item.name} (X{item.quantity})</span>
                        <span>${(item.original_price * item.quantity).toFixed(2)}</span>
                    </div>
                    {/each}
                </div>

                <div class="border-t pt-4">
                    <div class="flex justify-between font-semibold text-lg">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
                
                <button class="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    </div>
    
    {:else}
    <p class="text-center text-gray-500">Your cart is empty.</p>
    {/if}
</div>

