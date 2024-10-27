<script>
    import { cart, removeFromCart } from '$lib/utils/cartStore'
    import {PUBLIC_TEST_PUBLIC_KEY, PUBLIC_API} from '$env/static/public'
    import { goto } from '$app/navigation'
    import { onDestroy, onMount } from 'svelte';

    
    const ImageUrl = (image) => {
        let url = `http://localhost:8000/static/image/${image}`
        return url
    }

    $: total = $cart.reduce((sum, item) => sum + item.original_price, 0);

    let checkout = false
    let payStack = true
    let shipping = false
    const updateQuantity = (id, newQuantity) => {
        const item = $cart.find(item => item.id === id);
        if (item) {
            item.quantity = newQuantity;
            total = $cart.reduce((sum, item) => sum + item.original_price * item.quantity, 0);
        }
    };

    function clearLocalStorage(){
        localStorage.clear()
    }

    const payWithPaystack = () => {
        var handler = PaystackPop.setup({
            key: PUBLIC_TEST_PUBLIC_KEY,
            email: 'testing@mail.com',
            amount: total * 10000,
            currency: 'NGN',
            ref: '' + Math.floor((Math.random() * 1000000000) + 1),
            metadata: {
                custom_fields: [
                    {
                    display_name: "Mobile_number",
                    variable_name: "mobile_number",
                    value: "+2348012345678"
                    }
                ]
            },
            callback: function(response){
                console.log('success. Transaction ref is ' + response.reference)

                // Make a request to your backend to verify the transaction
                verifyTransaction(response.reference)
                
            },
            onClose: function(){
                alert("Payment process was closed")
            }

        })
        handler.openIframe()
    }
    
    async function verifyTransaction(reference) {
        const res =await fetch(`${PUBLIC_API}verify-transaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ reference })
        })
        const data = await res.json()
        if(data?.status !== 'success'){
            goto('/cart/failed')
        }
        localStorage.clear()
        payStack = false
        checkout = true
        console.log("Transaction verified: ", data)
    }
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
                            <!-- svelte-ignore a11y-label-has-associated-control -->
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
                {#if payStack}
                    <button class="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition" on:click={payWithPaystack}>
                        Proceed to Checkout
                    </button>
                {/if}
                
                {#if checkout}
                    <form method="POST">
                    {#each $cart as item}
                        <input type="text" name="quantity" value={item.quantity} hidden>
                        <input type="text" name="id" value={item.id} hidden>
                        <input type="text" name="total" value={total} hidden>
    
                        
                    {/each}
                    <button class="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition">
                        Checkout
                    </button>
                    </form>
                {/if}
            </div>
        </div>
    </div>
    
    {:else}
    <p class="text-center text-gray-500">Your cart is empty.</p>
    {/if}
</div>

