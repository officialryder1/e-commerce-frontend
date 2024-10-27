<script>
    import { onMount, onDestroy } from 'svelte';
    import {PUBLIC_API} from '$env/static/public'
    export let data

    const order = data?.order?.data
    
    // console.log(order)
    const ImageUrl = (image) => {
        let url = `http://localhost:8000/static/image/${image}`
        return url
    }

   
    let product= []
    let buyer = []
    let shipping = []
    let user_id = ''
    
    $: buyer_detail = buyer
    // $: console.log('Buyer', buyer_detail)

    
    onMount(async () => {
        product = await Promise.all(order.map(async (productId) => {
            let id = productId.product_id
            const res = await fetch(`${PUBLIC_API}product/${id}`)
            return await res.json()
        }))
        
        
        buyer = await Promise.all(order.map(async (userId) => {
            user_id = userId.buyer_id
           
            const res = await fetch(`${PUBLIC_API}user_me?user_id=${user_id}`)
            return await res.json()
        }))
     
        const detail = await fetch(`${PUBLIC_API}retrieve_user_shipping?user_id=${user_id}`)
        shipping = await detail.json()
       
    
        
    })
    // $: productData = product.map(item => item.data)
    // $:console.log(productData)
    let showBuyer = false

    function toggleBuyer(){
        showBuyer = true
    }
</script>

<h1 class="font-bold tracking-wider">Track your products order <b>.</b></h1><br><br>

<div class="flex w-full flex-col border-opacity-50">
    <div class="card bg-base-300 rounded-box grid place-items-center">
        {#if buyer.length > 0}
            {#each buyer_detail as user}
            <h1 class="uppercase font-semibold">{user.username} made an order</h1>
            {#each product as products}
                
                <div class="overflow-x-auto">
                    <table class="table">
                      <!-- head -->
                      <thead>
                        <tr>
                          <th>
                            
                          </th>
                          <th>Product</th>
                          <th>Amount paid</th>
                          <th>Quantity</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- row 1 -->
                        
                        <tr>
                            <th>
                              <label>
                                <input type="checkbox" class="checkbox" />
                              </label>
                            </th>
                            <td>
                              <div class="flex items-center gap-3">
                                <div class="avatar">
                                  <div class="mask mask-squircle h-12 w-12">
                                    <img
                                      src={ImageUrl(products.product_image)}
                                      alt="Product Card" />
                                  </div>
                                </div>
                                <div>
                                  <div class="font-bold">{products.name}</div>
                                  <div class="text-sm opacity-50">Nigeria</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              
                              <br />
                              <span class="badge badge-ghost badge-sm"></span>
                            </td>
                            <td></td>
                            <th>
                              <button class="btn btn-ghost btn-xs" on:click={() => showBuyer =! showBuyer}>buyer details</button>
                            </th>
                          </tr>
                    
                        <br>
                    </table>
                    <!-- show buyer contact -->
                    {#if showBuyer}
                    {#each order as orders}
                        <span class="text-center flex flex-col">
                            <h1 class="font-bold">Price Paid</h1>
                            <p class="fa">{orders.amount_paid}</p>
                            <h1 class="font-bold">Quantity Order</h1>
                            <p class="fa">{orders.quantity}</p>
                        </span>
                        <div class="card bg-base-200 rounded-box h-56  m-10 p-5 outline-dashed tracking-widest">
                           
                            <h1 class="font-bold text-cyan-700 tracking-widest">Shipping Details</h1><br>
                            <ul>
                                <li><b>Email:</b> {shipping.data[0].email}</li>
                                <li><b>Phone:</b> {shipping.data[0].phone}</li>
                                <li><b>State:</b> {shipping.data[0].state}</li>
                                <li><b>City:</b> {shipping.data[0].city}</li>
                                <li><b>Address:</b> {shipping.data[0].address}</li>
                                
                            </ul>
                        </div>
                    {/each}
                  {/if}
                </div>
                
            {/each}
            <br>
         {/each}
        {:else}
            <p class="p-10 font-bold">🛒No order has been place yet.</p>
        {/if}
    </div>
</div>


